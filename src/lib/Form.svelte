<!-- src/lib/Form.svelte -->
<script lang="ts">
  /**
   * @component Form
   * @description Declarative, schema-driven form generator. Renders `Field`, `Select`, and `CheckBox` based on `FieldSchema`. Supports validation, controlled state, and an external API via `expose`.
   *
   * @prop schema {FieldSchema[]} - Field configuration for the generated form
   *
   * @prop value {FormValues} - Initial form data
   * @default {}
   *
   * @prop rowGap {number | SizeKey} - Vertical spacing between fields
   * @default "md"
   *
   * @prop validateOn {"input" | "blur" | "submit"} - When validation should run
   * @default "blur"
   *
   * @prop onChange {(form: FormValues) => void} - Fired when form values change
   *
   * @prop onSubmit {(form: FormValues, ctx: { reset: () => void }) => void | Promise<void>} - Submission handler
   *
   * @prop formId {string} - Stable identifier for form elements
   *
   * @prop expose {(api: FormApi) => void} - Exposes imperative Form API
   *
   * @prop labelAlign {AlignText} - Alignment for labels
   * @options left|center|right
   * @default "left"
   *
   * @prop labelWeight {LabelWeight} - Font weight for labels
   * @options normal|medium|semibold|bold
   * @default "medium"
   *
   * @prop labelSize {SizeKey} - Size preset for labels
   * @options xs|sm|md|lg|xl
   * @default "md"
   *
   * @prop compact {boolean} - Enables denser sizing across controls
   * @default false
   *
   * @note Initial value for each field: `value[name]` → `schema.default` → `''` (or `false` for checkboxes).
   * @note `validateOn='input'|'blur'|'submit'` controls when validators run; built-in checks: `required`, `number`, and `email` regex.
   * @note `when(form)` hides a field dynamically; hidden fields are skipped during validation.
   * @note `Select` options are coerced to strings for the underlying control; provide string values if you rely on strict equality.
   * @note Errors are rendered with stable `id`s and wired via `aria-describedby`; `invalid` flags are passed to inputs.
   * @note `expose` provides `{ reset, submit, validate, getData }`; `validate` returns `Promise<boolean>`.
   * @note `compact` reduces control sizes (`xs→xs`, `sm→xs`, `md→sm`, `lg→md`, `xl→lg`) and centers labels where applicable.
   */
  import Field from "./Field.svelte";
  import Select from "./Select.svelte";
  import CheckBox from "./CheckBox.svelte";
  import Toast from "./Toast.svelte";
  import type {
    AlignText,
    LabelWeight,
    SizeKey,
    ToastVariant,
    FieldSchema,
    FormApi,
    FormValues,
  } from "./types";
  import { TEXT } from "./types";
  import { cx, debounce } from "../utils";

  type Props = {
    schema: FieldSchema[];
    value?: FormValues;
    rowGap?: number | SizeKey;
    validateOn?: "input" | "blur" | "submit";
    onChange?: (form: FormValues) => void;
    onSubmit?: (
      form: FormValues,
      ctx: { reset: () => void }
    ) => void | Promise<void>;
    formId?: string;
    expose?: (api: FormApi) => void;
    labelAlign?: AlignText;
    labelWeight?: LabelWeight;
    labelSize?: SizeKey;
    compact?: boolean;
  };

  let {
    schema,
    value = {},
    rowGap = "md",
    validateOn = "blur",
    onChange,
    onSubmit,
    formId,
    expose,
    labelAlign = "left",
    labelWeight = "medium",
    labelSize = "md",
    compact = false,
  }: Props = $props();

  const compactMap = {
    xs: "xs",
    sm: "xs",
    md: "sm",
    lg: "md",
    xl: "lg",
  } as const;

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  } as const;

  const gapClasses = {
    xs: "gap-1",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  } as const;

  const toStr = (v: unknown) => (v == null ? "" : String(v));

  let form = $state<FormValues>({});

  const touched = $state<Record<string, boolean>>({});
  const errors = $state<Record<string, string[]>>({});
  let toasts = $state<
    Array<{
      id: number;
      message: string;
      variant: ToastVariant;
      title?: string;
    }>
  >([]);
  let toastId = 0;

  const inputWidthClass = $derived(compact ? "" : "w-full");

  const rowGapClass = $derived(
    typeof rowGap === "number" ? "" : (gapClasses[rowGap] ?? gapClasses.md)
  );

  const rowGapStyle = $derived(typeof rowGap === "number" ? rowGap + "px" : "");

  const getFieldValue = (name: string): string | number => {
    const current = form[name];
    return typeof current === "number" ? current : toStr(current);
  };

  function getCompactSize(size: SizeKey) {
    return compact ? (compactMap[size] ?? "md") : size;
  }

  let formInstanceCounter = 0;
  const instanceId = $state(formInstanceCounter++);

  const baseFormId = $derived.by(() => {
    if (formId && formId.trim()) return formId.trim();
    const key = schema.map((f) => f.name).join("|");
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }
    const suffix = Math.abs(hash >>> 0).toString(36) || "form";
    return `form-${suffix}`;
  });

  const stableFormId = $derived.by(() => {
    if (formId && formId.trim()) return baseFormId;
    return `${baseFormId}-${instanceId}`;
  });

  $effect(() => {
    const nextNames = new Set(schema.map((f) => f.name));

    for (const key of Object.keys(form)) {
      if (!nextNames.has(key)) {
        delete form[key];
        delete touched[key];
        delete errors[key];
      }
    }

    for (const f of schema) {
      const hasIncoming = Object.prototype.hasOwnProperty.call(value, f.name);
      if (hasIncoming) {
        form[f.name] = value[f.name];
      } else if (!(f.name in form)) {
        form[f.name] = f.default ?? (f.type === "checkbox" ? false : "");
      }

      if (!(f.name in touched)) touched[f.name] = false;
      if (!errors[f.name]) errors[f.name] = [];
    }
  });

  const scheduleValidation = debounce((name: string) => {
    void validateField(name);
  }, 150);

  function setValue(name: string, v: unknown) {
    if (form[name] === v) return;
    form[name] = v;
    if (validateOn === "input") scheduleValidation(name);
    onChange?.({ ...form });
  }

  function blur(name: string) {
    if (!touched[name]) touched[name] = true;
    if (validateOn !== "submit") validateField(name);
  }

  function removeToast(id: number) {
    toasts = toasts.filter((t) => t.id !== id);
  }

  function addToast(variant: ToastVariant, message: string, title?: string) {
    const id = toastId++;
    toasts = [...toasts, { id, message, variant, title }];
  }

  async function validateField(name: string) {
    const f = schema.find((s) => s.name === name);
    if (!f) return;
    const val = form[name];
    const out: string[] = [];

    if (
      f.required &&
      (val === "" || val == null || (f.type === "checkbox" && !val))
    ) {
      out.push("Required");
    }

    if (f.type === "number" && val !== "" && Number.isNaN(Number(val))) {
      out.push("Must be a number");
    }

    if (f.type === "email" && val !== "") {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(val));
      if (!ok) out.push("Invalid email");
    }

    if (f.validators) {
      for (const v of f.validators) {
        const r = await v(val, form);
        if (r) out.push(r);
      }
    }

    errors[name] = out;
  }

  function showField(f: FieldSchema) {
    return f.when ? !!f.when(form) : true;
  }

  const visible = $derived(schema.filter(showField));
  const visibleNames = $derived(visible.map((f) => f.name));

  async function validateForm() {
    await Promise.all(visibleNames.map(validateField));
    return visibleNames.every((n) => (errors[n]?.length ?? 0) === 0);
  }

  function reset() {
    for (const f of schema) {
      form[f.name] = f.default ?? (f.type === "checkbox" ? false : "");
      touched[f.name] = false;
      errors[f.name] = [];
    }
    onChange?.({ ...form });
  }

  async function submit(e?: Event) {
    e?.preventDefault?.();
    const ok = await validateForm();
    if (!ok) return;
    try {
      await onSubmit?.({ ...form }, { reset });
      addToast("success", "Form submitted successfully");
    } catch (err) {
      addToast("danger", "Form submission failed", "Error");
      throw err;
    }
  }

  $effect(() => {
    const api: FormApi = {
      reset,
      submit: () => submit(),
      validate: () => validateForm(),
      getData: () => ({ ...form }),
      setValue: (name, value) => setValue(name, value),
    };
    expose?.(api);
  });
</script>

<form
  id={stableFormId}
  onsubmit={submit}
  novalidate
  class={cx(
    "grid font-sans w-full",
    rowGapClass,
    compact && "gap-2 justify-items-center"
  )}
  style:gap={rowGapStyle}
>
  {#each visible as f (f.name)}
    {#key f.name}
      <div
        class={cx(
          "grid gap-1 w-full min-w-0",
          compact ? "justify-items-center" : "justify-items-stretch"
        )}
      >
        {#if f.label}
          <div
            class={cx(
              weightClasses[labelWeight],
              compact
                ? "text-xs -mb-1 text-center"
                : [
                    TEXT[labelSize],
                    labelAlign === "center"
                      ? "text-center"
                      : labelAlign === "right"
                        ? "text-right"
                        : "text-left",
                  ],
              "text-[var(--color-text-default)] leading-normal"
            )}
          >
            {f.label}
            {#if f.required}
              <span class="text-[var(--color-text-default)]">*</span>
            {/if}
          </div>
        {/if}

        {#if f.type === "select"}
          {@const hasErr =
            (touched[f.name] || validateOn !== "submit") &&
            errors[f.name]?.length > 0}
          {@const errId = hasErr ? `${stableFormId}-err-${f.name}` : undefined}
          <Select
            class={cx(f.class, inputWidthClass)}
            options={(f.options ?? []).map((o) => ({
              label: toStr(o.label),
              value: toStr(o.value),
              disabled: o.disabled,
            }))}
            sz={getCompactSize(f.sz ?? "md")}
            variant={f.variant ?? "default"}
            value={toStr(form[f.name])}
            onChange={(v: string) => setValue(f.name, v)}
            onblur={() => blur(f.name)}
            invalid={hasErr}
            describedBy={errId}
          />
        {:else if f.type === "checkbox"}
          <div class={cx(f.class, compact && "mx-auto justify-self-center")}>
            <CheckBox
              class={f.class ?? ""}
              sz={getCompactSize(f.sz ?? "md")}
              variant="default"
              checked={!!form[f.name]}
              onChange={(c: boolean) => setValue(f.name, c)}
              onblur={() => blur(f.name)}
            />
          </div>
        {:else}
          {@const hasErr =
            (touched[f.name] || validateOn !== "submit") &&
            errors[f.name]?.length > 0}

          {@const errId = hasErr ? `${stableFormId}-err-${f.name}` : undefined}

          <Field
            class={cx(f.class, inputWidthClass)}
            as={f.type === "textarea" ? "textarea" : "input"}
            type={f.type === "number"
              ? "number"
              : f.type === "password"
                ? "password"
                : f.type === "email"
                  ? "email"
                  : "text"}
            rows={f.rows ?? 3}
            parseNumber={f.type === "number"}
            sz={getCompactSize(f.sz ?? "md")}
            variant={f.variant ?? "default"}
            value={getFieldValue(f.name)}
            onChange={(v: string | number) => setValue(f.name, v)}
            onblur={() => blur(f.name)}
            invalid={hasErr}
            describedBy={errId}
            autocomplete={f.type === "email" ? "email" : undefined}
            inputmode={f.type === "email" ? "email" : undefined}
          />
        {/if}

        {#if (touched[f.name] || validateOn !== "submit") && errors[f.name]?.length}
          <ul
            id={`${stableFormId}-err-${f.name}`}
            class={cx("m-0 pl-4 list-none", compact && "text-center")}
          >
            {#each errors[f.name] ?? [] as m, idx (`${f.name}-${idx}`)}
              <li
                class={cx(
                  "text-xs leading-tight mt-1 text-[var(--color-text-red)]",
                  compact && "text-[10px]"
                )}
              >
                {m}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/key}
  {/each}
</form>

{#each toasts as t (t.id)}
  <Toast
    title={t.title}
    message={t.message}
    variant={t.variant}
    onClose={() => removeToast(t.id)}
  />
{/each}
