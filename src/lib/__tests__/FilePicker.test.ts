// $lib/__tests__/FilePicker.test.ts
import "./setupLangContext";
import { fireEvent, render } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import FilePicker from "../FilePicker.svelte";

function createFile(name: string, type = "text/plain", content = "content") {
  return new File([content], name, { type });
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

  it("rejects dropped files that do not match accept", async () => {
    const handle = vi.fn();
    const handleError = vi.fn();
    const files = createFileList(
      createFile("malware.exe", "application/x-msdownload"),
    );
    const fakeDataTransfer = { files };
    const { container, getByText } = render(FilePicker, {
      props: {
        accept: ".txt",
        onFilesSelected: handle,
        onError: handleError,
      },
    });
    const dropZone = container.querySelector('[role="button"]') as HTMLElement;

    await fireEvent.drop(dropZone, { dataTransfer: fakeDataTransfer });

    expect(handle).not.toHaveBeenCalled();
    expect(handleError).toHaveBeenCalled();
    expect(getByText("No files selected")).toBeTruthy();
  });

  it("rejects files larger than maxBytes before callback", async () => {
    const handle = vi.fn();
    const handleError = vi.fn();
    const files = createFileList(
      createFile("large.txt", "text/plain", "12345"),
    );
    const { container } = render(FilePicker, {
      props: {
        maxBytes: 4,
        onFilesSelected: handle,
        onError: handleError,
      },
    });
    const input = container.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement;

    await fireEvent.change(input, { target: { files } });

    expect(handle).not.toHaveBeenCalled();
    expect(handleError).toHaveBeenCalled();
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
