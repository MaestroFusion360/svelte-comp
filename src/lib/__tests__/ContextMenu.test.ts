import { tick } from "svelte";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/svelte";
import { TEXTS } from "../lang";
import ContextMenu from "../ContextMenu.svelte";

const context = new Map([["lang", { value: "en" }]]);
const L = TEXTS.en.components.contextMenu;

describe("ContextMenu", () => {
  it("opens at the provided coordinates and triggers undo", async () => {
    const onUndo = vi.fn();
    const { component, getByTitle } = render(ContextMenu, {
      props: { onUndo },
      context,
    });

    component.openAt(
      new MouseEvent("contextmenu", { clientX: 8, clientY: 12 }),
    );
    await tick();
    await fireEvent.click(getByTitle(L.hotkeys.undo));
    expect(onUndo).toHaveBeenCalledTimes(1);
  });
});
