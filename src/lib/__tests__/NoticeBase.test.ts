// $lib/__tests__/NoticeBase.test.ts
import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import NoticeBase from "../NoticeBase.svelte";

describe("NoticeBase", () => {
  it("renders title and message", () => {
    const { getByText } = render(NoticeBase, {
      props: { title: "Heads up", message: "Something happened" },
    });

    expect(getByText("Heads up")).toBeTruthy();
    expect(getByText("Something happened")).toBeTruthy();
  });

  it("toggles icon visibility with showIcon", () => {
    const { container, unmount } = render(NoticeBase, {
      props: { message: "Icon on" },
    });

    expect(container.querySelector('span[aria-hidden="true"]')).toBeTruthy();

    unmount();

    const { container: noIconContainer } = render(NoticeBase, {
      props: { message: "Icon off", showIcon: false },
    });

    expect(
      noIconContainer.querySelector('span[aria-hidden="true"]'),
    ).toBeNull();
  });

  it("applies inline and size styles", () => {
    const { container, unmount } = render(NoticeBase, {
      props: { message: "Inline", inline: true },
    });

    const inlineRoot = container.firstElementChild as HTMLElement;
    expect(inlineRoot.className).not.toContain("shadow-lg");

    unmount();

    const { container: sized } = render(NoticeBase, {
      props: { message: "Sized", size: "md" },
    });

    const sizedRoot = sized.firstElementChild as HTMLElement;
    expect(sizedRoot.className).toContain("px-4");
  });

  it("applies variant styling classes", () => {
    const variants = [
      { variant: "success", token: "color-bg-success" },
      { variant: "danger", token: "color-bg-danger" },
      { variant: "warning", token: "color-bg-warning" },
      { variant: "info", token: "color-bg-page" },
    ] as const;

    variants.forEach(({ variant, token }) => {
      const { container } = render(NoticeBase, {
        props: { message: "Notice", variant },
      });

      const root = container.firstElementChild as HTMLElement;
      expect(root.className).toContain(token);
    });
  });

  it("exposes status role", () => {
    const { getByRole } = render(NoticeBase, {
      props: { message: "Status" },
    });

    const notice = getByRole("status");
    expect(notice.getAttribute("aria-live")).toBe("polite");
  });
});
