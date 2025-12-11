// src/types/index.ts
import type { Snippet } from "svelte";

// -------------------------------------------------------------------------
//                                  SIZE
// -------------------------------------------------------------------------
export const SIZES = ["xs", "sm", "md", "lg", "xl"] as const;
export type SizeKey = (typeof SIZES)[number];

export const TEXT: Record<SizeKey, string> = {
  xs: "[font-size:var(--text-xs)]",
  sm: "[font-size:var(--text-sm)]",
  md: "[font-size:var(--text-md)]",
  lg: "[font-size:var(--text-lg)]",
  xl: "[font-size:var(--text-xl)]",
};

// -------------------------------------------------------------------------
//                              ALIGHMENT
// -------------------------------------------------------------------------
export type AlignText = "left" | "center" | "right";
export type AlignContent = "start" | "center" | "end" | "stretch";

// -------------------------------------------------------------------------
//                             LABELS WEIGHT
// -------------------------------------------------------------------------
export type LabelWeight = "normal" | "medium" | "semibold" | "bold";

// -------------------------------------------------------------------------
//                                ACCORDION
// -------------------------------------------------------------------------
export type AccordionItem = {
  id?: string;
  title: string;
  content: string;
};

// -------------------------------------------------------------------------
//                                  BUTTON
// -------------------------------------------------------------------------
export const variants = [
  "primary",
  "secondary",
  "pill",
  "danger",
  "success",
  "warning",
  "ghost",
  "link",
  "info",
] as const;
export type ButtonVariant = (typeof variants)[number];

// -------------------------------------------------------------------------
//                                CAROUSEL
// -------------------------------------------------------------------------
export type CarouselItem = {
  id?: string | number;
  title?: string;
  content?: string;
  image?: string;
  children?: Snippet;
};

// -------------------------------------------------------------------------
//                                CODEVIEW
// -------------------------------------------------------------------------
export type Language = "txt" | "html" | "css" | "js" | "json" | "python";

// -------------------------------------------------------------------------
//                                COMPONENT
// -------------------------------------------------------------------------
export type ComponentVariant = "default" | "neutral";

// -------------------------------------------------------------------------
//                                HAMBURGER
// -------------------------------------------------------------------------
export type Item = { id: string; label: string };

// -------------------------------------------------------------------------
//                                   FORM
// -------------------------------------------------------------------------
export type FormComponentType =
  | "text"
  | "number"
  | "textarea"
  | "password"
  | "email"
  | "select"
  | "checkbox";

export interface FieldSchema {
  name: string;
  type: FormComponentType;
  label?: string;
  required?: boolean;
  class?: string;
  options?: {
    value: string | number | boolean;
    label: string;
    disabled?: boolean;
  }[];
  rows?: number;
  default?: unknown;
  when?: (form: Record<string, unknown>) => boolean;
  validators?: ((
    v: unknown,
    form?: Record<string, unknown>
  ) => string | null | Promise<string | null>)[];
  sz?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "filled" | "neutral";
}

export type FormApi = {
  reset: () => void;
  submit: () => void;
  validate: () => Promise<boolean>;
  getData: () => Record<string, unknown>;
  setValue: (name: string, value: unknown) => void;
};

export type FormValues = Record<string, unknown>;

// -------------------------------------------------------------------------------
//                                    MENU
// -------------------------------------------------------------------------------
export type MenuAction =
  | string
  | {
      id?: string;
      label?: string;
      real?: string;
      shortcut?: string;
      submenu?: MenuAction[];
      type?: "separator";
    };
export type MenuItem = { name: string; actions: MenuAction[] };

// -------------------------------------------------------------------------------
//                                    TABLE
// -------------------------------------------------------------------------------
export type CellAlign = "start" | "center" | "end";
export type Column<T> = {
  key: keyof T;
  label: string;
  align?: CellAlign;
  width?: string;
};
export type TableRow = Record<string, unknown>;
export type TableVariant =
  | "default"
  | "dense"
  | "list"
  | "noBorder"
  | "noTitle"
  | "zebra";

// -------------------------------------------------------------------------------
//                                     TABS
// -------------------------------------------------------------------------------
export type TabItem = {
  id: string;
  label: string;
  disabled?: boolean;
};
export type TabsVariant = "default" | "pills" | "underline";

// -------------------------------------------------------------------------------
//                                     SELECT
// -------------------------------------------------------------------------------
export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
  swatch?: string;
};

// -------------------------------------------------------------------------------
//                                     TOOLTIP
// -------------------------------------------------------------------------------
export type Position = "top" | "bottom" | "left" | "right";

// -------------------------------------------------------------------------------
//                                      TOAST
// -------------------------------------------------------------------------------

export type ToastVariant = "success" | "danger" | "warning" | "info";

// -------------------------------------------------------------------------------
//                                      FIELD
// -------------------------------------------------------------------------------
export type FieldVariant = "default" | "filled" | "neutral";
export type As = "input" | "textarea";

export type FieldType = {
  as?: As;
  label?: string;
  sz?: SizeKey;
  variant?: FieldVariant;
  clearable?: boolean;
  rows?: number;
  parseNumber?: boolean;
  leading?: Snippet | string;
  trailing?: Snippet | string;
  onChange?: (val: string | number) => void;
  invalid?: boolean;
  describedBy?: string;
};

// -------------------------------------------------------------------------------
//                               PRIMARY COLOR TOGGLE
// -------------------------------------------------------------------------------
export type PrimaryKey =
  | "default"
  | "cyan"
  | "red"
  | "green"
  | "yellow"
  | "pink"
  | "orange"
  | "purple";

export type PaletteOption = {
  value: PrimaryKey;
  label: string;
  swatch: string;
};

// -------------------------------------------------------------------------------
