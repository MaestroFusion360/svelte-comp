import { describe, expect, it } from "vitest";
import { render } from "@testing-library/svelte";
import InstallPWA from "../InstallPWA.svelte";

describe("InstallPWA", () => {
  it("renders button when alwaysShow is true", () => {
    const { getByText } = render(InstallPWA, {
      props: { alwaysShow: true },
    });

    expect(getByText("Install App")).toBeTruthy();
  });

  it("does not render button by default", () => {
    const { queryByText } = render(InstallPWA);
    expect(queryByText("Install App")).toBeNull();
  });
});
