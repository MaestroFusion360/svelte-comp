<!-- src/demo/FormDemo.svelte -->
<script lang="ts">
  import { getContext } from "svelte";
  import { Button, Card, Form, Tooltip } from "$lib";
  import type { FieldSchema, FormApi } from "$lib/types";
  import { TEXTS } from "../lang";

  type Props = {
    onSubmit?: (data: FormValues) => void;
  };
  let { onSubmit: externalOnSubmit = () => {} }: Props = $props();

  type FormValues = Record<string, unknown>;

  const lang = getContext<{ value: keyof typeof TEXTS }>("lang");
  const L = $derived(TEXTS[lang.value]);

  const formId = "profile-form";
  let api: FormApi | null = $state(null);

  const schema = $derived<FieldSchema[]>([
    {
      name: "firstName",
      type: "text",
      label: L.form.fields.firstName,
      required: true,
      sz: "md",
    },
    {
      name: "lastName",
      type: "text",
      label: L.form.fields.lastName,
      required: true,
      sz: "md",
    },
    {
      name: "email",
      type: "email",
      label: L.form.fields.email,
      required: true,
      sz: "md",
    },

    // pwd with custom validation
    {
      name: "password",
      type: "password",
      label: L.form.fields.password,
      required: true,
      sz: "md",
      validators: [
        (v) =>
          typeof v === "string" && v.length >= 6
            ? null
            : L.form.validators.passwordLength,
      ],
    },

    // confirm pwd match
    {
      name: "confirmPassword",
      type: "password",
      label: L.form.fields.confirmPassword,
      required: true,
      sz: "md",
      validators: [
        (v, f) =>
          typeof v === "string" &&
          !!f &&
          typeof f.password === "string" &&
          v === f.password
            ? null
            : L.form.validators.passwordMatch,
      ],
    },

    // age validation
    {
      name: "age",
      type: "number",
      label: L.form.fields.age,
      required: true,
      validators: [
        (v) => {
          if (typeof v === "string" && v.trim() === "") return null;
          const n = typeof v === "number" ? v : Number(v);
          return Number.isNaN(n) || n < 18
            ? L.form.validators.adultsOnly
            : null;
        },
      ],
    },

    // selects
    {
      name: "gender",
      type: "select",
      label: L.form.fields.gender,
      required: true,
      options: L.options.formGender,
    },
    {
      name: "country",
      type: "select",
      label: L.form.fields.country,
      required: true,
      options: L.options.formCountries,
    },

    // misc
    { name: "about", type: "textarea", label: L.form.fields.about, rows: 5 },
    { name: "newsletter", type: "checkbox", label: L.form.fields.newsletter },
    { name: "tos", type: "checkbox", label: L.form.fields.tos, required: true },
  ]);

  function handleSubmit(data: FormValues) {
    externalOnSubmit(data);
  }

  function handleCancel() {
    api?.reset();
  }

  function grabExpose(a: FormApi) {
    api = a;
  }

  // Autofill helper for debugging / demo
  function fillRandomValid() {
    if (!api) return;

    const names = ["John", "Alex", "Tom", "Sam", "Anna", "Jessica", "Sarah"];
    const surnames = ["Smith", "Williams", "Brown", "Johnson", "Miller"];

    const rand = (a: string[]) => a[Math.floor(Math.random() * a.length)];
    const randInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const pwd = Math.random().toString(36).slice(2, 10);

    for (const f of schema) {
      switch (f.type) {
        case "text": {
          const n = f.name.toLowerCase();
          if (n.includes("first")) api.setValue(f.name, rand(names));
          else if (n.includes("last")) api.setValue(f.name, rand(surnames));
          else api.setValue(f.name, rand(names));
          break;
        }
        case "password":
          api.setValue(f.name, pwd);
          break;
        case "number":
          api.setValue(f.name, randInt(18, 100));
          break;
        case "email":
          api.setValue(
            f.name,
            `${rand(names).toLowerCase()}.${rand(surnames).toLowerCase()}@example.com`,
          );
          break;
        case "select": {
          const opts = f.options ?? [];
          if (opts.length > 0) {
            const idx = randInt(0, opts.length - 1);
            api.setValue(f.name, String(opts[idx].value));
          }
          break;
        }
        case "checkbox":
          api.setValue(f.name, Math.random() < 0.5);
          break;
        case "textarea":
          api.setValue(f.name, "Auto generated");
          break;
      }
    }
  }
</script>

{#snippet formHeader()}
  <div
    class="p-4 flex justify-center font-semibold text-[var(--color-text-default)] text-lg"
  >
    {L.form.header}
  </div>
{/snippet}

{#snippet formFooter()}
  <div class="p-4 flex justify-center gap-[var(--spacing-sm)]">
    <Tooltip text={L.form.footer.submit}>
      <Button variant="primary" type="submit" form={formId}
        >{L.form.footer.submit}</Button
      >
    </Tooltip>
    <Tooltip text={L.form.footer.cancel}>
      <Button variant="secondary" type="button" onClick={handleCancel}
        >{L.form.footer.cancel}</Button
      >
    </Tooltip>
    <Tooltip text={L.form.footer.random}>
      <Button variant="info" type="button" onClick={fillRandomValid}>
        {L.form.footer.random}
      </Button>
    </Tooltip>
  </div>
{/snippet}

<Card header={formHeader} footer={formFooter}>
  <Form
    {schema}
    rowGap="xl"
    onSubmit={handleSubmit}
    {formId}
    expose={grabExpose}
    labelAlign="left"
    compact={false}
  />
</Card>
