// src/demo/toastStore.ts
import { writable } from "svelte/store";
import { getToastConfig } from "$utils";
import type { ToastVariant } from "$lib/types";

export const toasts = writable<
  Array<{ id: number; title?: string; message: string; variant: ToastVariant }>
>([]);

let toastId = 0;

export function addToast(variant: ToastVariant, opt?: { title?: string; message?: string }) {
  const id = toastId++;
  const cfg = getToastConfig(variant, opt?.message);

  toasts.update((arr) => [
    ...arr,
    {
      id,
      title: opt?.title ?? cfg.title,
      message: opt?.message ?? cfg.message,
      variant,
    },
  ]);
}

export function removeToast(id: number) {
  toasts.update((arr) => arr.filter((t) => t.id !== id));
}

export function showToast(variant: ToastVariant) {
  addToast(variant);
}
