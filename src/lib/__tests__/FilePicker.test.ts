// $lib/__tests__/FilePicker.test.ts
import "./setupLangContext";
import { fireEvent, render } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import FilePicker from "../FilePicker.svelte";

function createFile(name: string) {
  return new File(["content"], name, { type: "text/plain" });
}

describe("FilePicker", () => {
  const createFileList = (...files: File[]): FileList => {
    const fileList: Partial<FileList> = {
      length: files.length,
      item(index: number) {
        return files[index] ?? null;
      },
    };
    files.forEach((file, idx) => {
      (fileList as any)[idx] = file;
    });
    return fileList as FileList;
  };

  it("renders the default label", () => {
    const { getByText } = render(FilePicker);
    expect(getByText("Choose files")).toBeTruthy();
  });

  it("invokes onFilesSelected when using the hidden input", async () => {
    const handle = vi.fn();
    const files = createFileList(createFile("example.txt"));
    const { container } = render(FilePicker, {
      props: { onFilesSelected: handle },
    });
    const input = container.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;

    await fireEvent.change(input, { target: { files } });
    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle.mock.calls[0][0]).toHaveLength(1);
    expect(input.value).toBe("");
  });

  it("supports drag and drop file selection", async () => {
    const handle = vi.fn();
    const files = createFileList(createFile("drag.txt"));
    const fakeDataTransfer = { files };
    const { container } = render(FilePicker, {
      props: { onFilesSelected: handle },
    });
    const dropZone = container.querySelector('[role="button"]') as HTMLElement;

    await fireEvent.drop(dropZone, { dataTransfer: fakeDataTransfer });
    expect(handle).toHaveBeenCalled();
  });

  it("does not open picker when disabled", async () => {
    const { container } = render(FilePicker, { props: { disabled: true } });
    const button = container.querySelector("button") as HTMLButtonElement;
    const input = container.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;
    const clickSpy = vi.spyOn(input, "click");

    await fireEvent.click(button);
    expect(clickSpy).not.toHaveBeenCalled();
  });
});
