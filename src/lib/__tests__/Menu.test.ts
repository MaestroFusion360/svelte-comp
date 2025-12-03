// $lib/__tests__/Menu.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Menu from "../Menu.svelte";

const menus = [
  {
    name: "File",
    actions: [
      "New",
      { id: "open", label: "Open…" },
      "Save",
      {
        id: "export",
        label: "Export",
        submenu: [
          { id: "csv", label: "CSV" },
          { id: "pdf", label: "PDF" },
        ],
      },
      {
        id: "convert",
        label: "Convert",
        submenu: ["DOC", "RTF"],
      },
    ],
  },
  {
    name: "View",
    actions: ["xs", "sm", "md", "lg", "xl"],
  },
];

const csvAction = { id: "csv", label: "CSV" };
const pdfAction = { id: "pdf", label: "PDF" };
const exportAction = {
  id: "export",
  label: "Export",
  submenu: [csvAction, pdfAction],
};
const submenuMenus = [
  {
    name: "File",
    actions: ["New", exportAction],
  },
];

describe("Menu", () => {
  it("opens submenu on click and calls onSelect for action", async () => {
    const handle = vi.fn();
    const { getByText, queryByText } = render(Menu, {
      props: { menus, onSelect: handle },
    });

    const fileBtn = getByText("File");
    await fireEvent.click(fileBtn);
    expect(getByText("New")).toBeTruthy();

    const openAction = getByText("Open…");
    await fireEvent.click(openAction);

    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith("File", menus[0].actions[1]);
    expect(queryByText("New")).toBeNull();
  });

  it("closes menu on Escape and restores focus to trigger", async () => {
    const { getByText, queryByText } = render(Menu, { props: { menus } });
    const fileBtn = getByText("File");

    await fireEvent.click(fileBtn);
    expect(getByText("New")).toBeTruthy();

    const menuEl = getByText("New").closest('[role="menu"]');
    expect(menuEl).toBeTruthy();
    await fireEvent.keyDown(menuEl as Element, { key: "Escape" });

    expect(queryByText("New")).toBeNull();
    expect(document.activeElement).toBe(fileBtn);
  });

  it("toggles submenu on repeated clicks", async () => {
    const { getByText, queryByText } = render(Menu, { props: { menus } });
    const fileBtn = getByText("File");

    await fireEvent.click(fileBtn);
    expect(getByText("New")).toBeTruthy();

    await fireEvent.click(fileBtn);
    expect(queryByText("New")).toBeNull();
  });

  it("switches open menu on hover while another is open", async () => {
    const { getByText, queryByText } = render(Menu, { props: { menus } });
    const fileBtn = getByText("File");
    const viewBtn = getByText("View");

    await fireEvent.click(fileBtn);
    expect(getByText("New")).toBeTruthy();

    await fireEvent.mouseEnter(viewBtn);
    expect(queryByText("New")).toBeNull();
    expect(getByText("md")).toBeTruthy();
  });

  it("opens submenu and selects nested action", async () => {
    const handle = vi.fn();
    const { getByText, queryByText } = render(Menu, {
      props: { menus: submenuMenus, onSelect: handle },
    });

    const fileBtn = getByText("File");
    await fireEvent.click(fileBtn);

    await fireEvent.click(getByText("Export"));
    await fireEvent.click(getByText("CSV"));

    expect(handle).toHaveBeenCalledWith("File", csvAction);
    expect(queryByText("Export")).toBeNull();
  });

  it("supports keyboard navigation into submenu", async () => {
    const handle = vi.fn();
    const { getByText, queryByText } = render(Menu, {
      props: { menus: submenuMenus, onSelect: handle },
    });

    const fileBtn = getByText("File");
    await fireEvent.keyDown(fileBtn, { key: "ArrowDown" });
    expect(getByText("New")).toBeTruthy();

    const menuEl = getByText("New").closest('[role="menu"]');
    expect(menuEl).toBeTruthy();

    await fireEvent.keyDown(menuEl as Element, { key: "ArrowDown" });
    await fireEvent.keyDown(menuEl as Element, { key: "ArrowRight" });

    const subMenuEl = getByText("CSV").closest('[role="menu"]');
    expect(subMenuEl).toBeTruthy();

    await fireEvent.keyDown(subMenuEl as Element, { key: "Enter" });

    expect(handle).toHaveBeenCalledWith("File", csvAction);
    expect(queryByText("Export")).toBeNull();
  });

  it("applies size styling from sz prop to the menu bar", () => {
    const { getByText } = render(Menu, { props: { menus, sz: "md" } });
    const nav = getByText("View").closest("nav");

    expect(nav?.className).toContain("h-9");
    expect(nav?.className).toContain("[font-size:var(--text-md)]");
  });

  it("ignores separators during interaction", async () => {
    const handle = vi.fn();

    const menusWithSep = [
      {
        name: "File",
        actions: ["One", { type: "separator" as const }, "Two"],
      },
    ];

    const { getByText, queryByRole } = render(Menu, {
      props: { menus: menusWithSep, onSelect: handle },
    });

    await fireEvent.click(getByText("File"));

    const sep = queryByRole("separator");
    expect(sep).toBeTruthy();

    await fireEvent.click(sep as Element);
    expect(handle).not.toHaveBeenCalled();
  });

  it("switches between submenus on hover", async () => {
    const { getByText, queryByText } = render(Menu, {
      props: { menus },
    });

    await fireEvent.click(getByText("File"));

    await fireEvent.click(getByText("Export"));
    expect(getByText("CSV")).toBeTruthy();

    await fireEvent.click(getByText("Convert"));
    expect(queryByText("CSV")).toBeNull();
    expect(getByText("DOC")).toBeTruthy();
  });
});
