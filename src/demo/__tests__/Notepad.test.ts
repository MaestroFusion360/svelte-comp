import { render, fireEvent, screen, waitFor } from "@testing-library/svelte";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Notepad from "../Notepad.svelte";
import { TEXTS } from "../../lang";

const L = TEXTS.en;

function editor(container: HTMLElement) {
  const textarea = container.querySelector("textarea");
  expect(textarea).toBeTruthy();
  return textarea as HTMLTextAreaElement;
}

async function chooseMenuAction(menuLabel: string, actionLabel: string) {
  await fireEvent.click(screen.getByText(menuLabel));
  await fireEvent.click(await screen.findByText(actionLabel));
}

describe("Notepad demo", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        readText: vi.fn().mockResolvedValue("pasted"),
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders localized menus, editable code view and status bar", () => {
    const { container } = render(Notepad, {
      props: { L, class: "h-[360px]" },
    });

    expect(screen.getByText(L.notepad.menu.file)).toBeTruthy();
    expect(screen.getByText(L.notepad.menu.edit)).toBeTruthy();
    expect(screen.getByText(L.notepad.menu.view)).toBeTruthy();
    expect(screen.getByText(L.notepad.menu.settings)).toBeTruthy();
    expect(screen.getByText(L.notepad.menu.help)).toBeTruthy();
    expect(screen.getByRole("region", { name: "Editor" })).toBeTruthy();
    expect(editor(container).readOnly).toBe(false);
    expect(screen.getByText("Ln 1, Col 1")).toBeTruthy();
    expect(screen.getByText("TXT")).toBeTruthy();
  });

  it("updates text and supports undo, redo and new document actions", async () => {
    const confirmSpy = vi.spyOn(window, "confirm").mockReturnValue(true);
    const { container } = render(Notepad, {
      props: { L, class: "h-[360px]" },
    });
    const textarea = editor(container);

    await fireEvent.input(textarea, { target: { value: "first" } });
    await fireEvent.input(textarea, { target: { value: "second" } });

    await chooseMenuAction(L.notepad.menu.edit, L.notepad.actions.undo);
    await waitFor(() => expect(textarea.value).toBe("first"));

    await chooseMenuAction(L.notepad.menu.edit, L.notepad.actions.redo);
    await waitFor(() => expect(textarea.value).toBe("second"));

    await chooseMenuAction(L.notepad.menu.file, L.notepad.actions.new);
    expect(confirmSpy).toHaveBeenCalledWith(L.notepad.confirmNew);
    await waitFor(() => expect(textarea.value).toBe(""));
  });

  it("supports clipboard copy, cut and paste through the Edit menu", async () => {
    const { container } = render(Notepad, {
      props: { L, class: "h-[360px]" },
    });
    const textarea = editor(container);
    const clipboard = navigator.clipboard as unknown as {
      readText: ReturnType<typeof vi.fn>;
      writeText: ReturnType<typeof vi.fn>;
    };

    await fireEvent.input(textarea, { target: { value: "copy text" } });
    textarea.focus();
    textarea.setSelectionRange(0, 4);
    await chooseMenuAction(L.notepad.menu.edit, L.notepad.actions.copy);
    expect(clipboard.writeText).toHaveBeenCalledWith("copy");

    textarea.focus();
    textarea.setSelectionRange(5, 9);
    await chooseMenuAction(L.notepad.menu.edit, L.notepad.actions.cut);
    expect(clipboard.writeText).toHaveBeenCalledWith("text");
    await waitFor(() => expect(textarea.value).toBe("copy "));

    textarea.focus();
    textarea.setSelectionRange(5, 5);
    await chooseMenuAction(L.notepad.menu.edit, L.notepad.actions.paste);
    await waitFor(() => expect(textarea.value).toBe("copy pasted"));
  });

  it("opens settings/about dialogs and can hide the status bar", async () => {
    render(Notepad, { props: { L, class: "h-[360px]" } });

    await chooseMenuAction(L.notepad.menu.settings, L.notepad.actions.options);
    expect(
      screen.getByRole("dialog", { name: L.notepad.actions.options }),
    ).toBeTruthy();
    await fireEvent.click(screen.getByLabelText(L.notepad.actions.statusBar));
    await fireEvent.click(screen.getByRole("button", { name: "OK" }));
    await waitFor(() => expect(screen.queryByText("Ln 1, Col 1")).toBeNull());

    await chooseMenuAction(L.notepad.menu.help, L.notepad.actions.about);
    expect(
      screen.getByRole("dialog", { name: L.notepad.actions.about }),
    ).toBeTruthy();
    expect(screen.getByText(L.notepad.aboutText)).toBeTruthy();
  });
});
