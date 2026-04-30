// $lib/__tests__/Badge.test.ts
import { render } from "@testing-library/svelte";
import { describe, it, expect } from "vitest";
import Badge from "../Badge.svelte";

describe("Badge", () => {
  it("renders message text", () => {
    const { getByText } = render(Badge, {
      props: { message: "Active" },
    });

    expect(getByText("Active")).toBeTruthy();
  });

  it("hides icon by default", () => {
    const { container } = render(Badge, {
      props: { message: "No icon" },
    });

    expect(container.querySelector('span[aria-hidden="true"]')).toBeNull();
  });

  it("shows icon when enabled", () => {
    const { container } = render(Badge, {
      props: { message: "Icon", showIcon: true },
    });

    expect(container.querySelector('span[aria-hidden="true"]')).toBeTruthy();
  });

  it("applies variant styling classes", () => {
    const variants = [
      { variant: "success", token: "color-bg-success" },
      { variant: "danger", token: "color-bg-danger" },
      { variant: "warning", token: "color-bg-warning" },
      { variant: "info", token: "color-bg-page" },
    ] as const;

    variants.forEach(({ variant, token }) => {
      const { container } = render(Badge, {
        props: { message: "Badge", variant },
      });

      const root = container.firstElementChild as HTMLElement;
      expect(root.className).toContain(token);
      expect(root.className).not.toContain("shadow-lg");
    });
  });
});
