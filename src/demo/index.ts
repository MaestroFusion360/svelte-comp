// src/demo/index.ts
export { default as AboutDemo } from "./AboutDemo.svelte";
export { default as CodeViewDemo } from "./CodeViewDemo.svelte";
export { default as Component } from "./Component.svelte";
export { default as Container } from "./Container.svelte";
export { default as DialogDemo } from "./DialogDemo.svelte";
export { default as FormDemo } from "./FormDemo.svelte";
export { default as MenuDemo } from "./MenuDemo.svelte";
export { default as Notepad } from "./Notepad.svelte";
export { default as PlayCard } from "./PlayCard.svelte";
export { default as SplitterDemo } from "./SplitterDemo.svelte";

// -------------------------------------------------------------------------------
//                                        APP
// -------------------------------------------------------------------------------

// Page identifiers
export const pageIds = [
  "about",
  "accordion",
  "button",
  "card",
  "carousel",
  "checkbox",
  "codeView",
  "colorPicker",
  "datePicker",
  "dialog",
  "field",
  "filePicker",
  "form",
  "menu",
  "notepad",
  "progressBar",
  "progressCircle",
  "radio",
  "select",
  "slider",
  "splitter",
  "switch",
  "tablePagination",
  "tabs",
  "themeToggle",
  "timePicker",
  "toast",
] as const;

export type PageId = (typeof pageIds)[number];

// -------------------------------------------------------------------------------
//                                      PLAYCARD
// -------------------------------------------------------------------------------
export const fieldTypes = ["input", "number", "textarea"] as const;
export type FieldTypeOption = (typeof fieldTypes)[number];

export const componentMeta = {
  Accordion: {
    variants: [],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: false },
  },
  Button: {
    variants: [
      "primary",
      "secondary",
      "pill",
      "danger",
      "success",
      "warning",
      "ghost",
      "link",
    ],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: true, disabled: true },
  },
  Card: {
    variants: [],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: false },
  },
  Carousel: {
    variants: [],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: false },
  },
  CheckBox: {
    variants: ["default", "neutral"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: true, disabled: true },
  },
  CodeView: {
    variants: [],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: false },
  },
  ColorPicker: {
    variants: [],
    sizes: [],
    supports: { label: true, disabled: true },
  },
  DatePicker: {
    variants: [],
    sizes: [],
    supports: { label: true, disabled: true },
  },
  Dialog: {
    variants: [],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: false },
  },
  FilePicker: {
    variants: [],
    sizes: [],
    supports: { label: true, disabled: true },
  },
  Field: {
    variants: ["default", "filled", "neutral"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: true, disabled: true },
  },
  Menu: {
    variants: [],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: false },
  },
  ProgressBar: {
    variants: ["default", "neutral"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: true, disabled: true },
  },
  ProgressCircle: {
    variants: ["default", "neutral"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: true, disabled: true },
  },
  Radio: {
    variants: ["default", "neutral"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: true },
  },
  Select: {
    variants: ["default", "filled", "neutral"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: true, disabled: true },
  },
  Switch: {
    variants: [],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: true, disabled: true },
  },
  Slider: {
    variants: ["default", "neutral"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: true },
  },
  Splitter: {
    variants: [],
    sizes: [],
    supports: { label: false, disabled: false },
  },
  TimePicker: {
    variants: [],
    sizes: [],
    supports: { label: true, disabled: true },
  },
  Table: {
    variants: ["default", "dense", "list", "noBorder", "noTitle", "zebra"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: false },
  },
  Tabs: {
    variants: ["default", "pills", "underline"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: false },
  },
  ThemeToggle: {
    variants: [],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    supports: { label: false, disabled: true },
  },
  Toast: {
    variants: ["success", "danger", "warning", "info"],
    sizes: [],
    supports: { label: false, disabled: false },
  },
  Unknown: {
    variants: [],
    sizes: [],
    supports: { label: false, disabled: false },
  },
} as const;

export type ComponentName = keyof typeof componentMeta;
// -------------------------------------------------------------------------------
