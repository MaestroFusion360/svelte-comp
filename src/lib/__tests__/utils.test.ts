import { describe, expect, it } from "vitest";
import { formatFileSize } from "../../utils";

describe("utility helpers", () => {
  it("formats invalid or negative file sizes safely", () => {
    expect(formatFileSize(Number.NaN)).toBe("0 Bytes");
    expect(formatFileSize(-1)).toBe("0 Bytes");
  });

  it("caps very large file sizes to the largest supported unit", () => {
    expect(formatFileSize(1024 ** 5)).toBe("1048576 GB");
  });
});
