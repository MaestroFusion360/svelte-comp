// $lib/__tests__/Form.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Form from "../Form.svelte";

type FormApi = {
  reset: () => void;
  submit: () => Promise<void> | void;
  validate: () => Promise<boolean>;
  getData: () => Record<string, unknown>;
};

describe("Form", () => {
  const basicSchema = [
    {
      name: "email",
      type: "email" as const,
      label: "Email",
      required: true,
    },
    {
      name: "password",
      type: "password" as const,
      label: "Password",
      required: true,
    },
    {
      name: "newsletter",
      type: "checkbox" as const,
      label: "Subscribe to newsletter",
    },
  ];

  it("renders form with all field types", () => {
    const { getByText } = render(Form, {
      props: { schema: basicSchema },
    });

    expect(getByText("Email")).toBeTruthy();
    expect(getByText("Password")).toBeTruthy();
    expect(getByText("Subscribe to newsletter")).toBeTruthy();
  });

  it("initializes form with default values", () => {
    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        value: { email: "test@example.com" },
      },
    });

    const emailInput = container.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    expect(emailInput.value).toBe("test@example.com");
  });

  it("updates form values on input", async () => {
    const mockOnChange = vi.fn();
    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        onChange: mockOnChange,
      },
    });

    const emailInput = container.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    await fireEvent.input(emailInput, { target: { value: "new@example.com" } });

    expect(mockOnChange).toHaveBeenCalledWith({
      email: "new@example.com",
      password: "",
      newsletter: false,
    });
  });

  it("validates required fields on blur", async () => {
    const { container, findByText } = render(Form, {
      props: {
        schema: basicSchema,
        validateOn: "blur",
      },
    });

    const emailInput = container.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    await fireEvent.blur(emailInput);

    const error = await findByText("Required");
    expect(error).toBeTruthy();
  });

  it("submits form when valid", async () => {
    const mockOnSubmit = vi.fn();
    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        onSubmit: mockOnSubmit,
      },
    });

    // Fill required fields
    const emailInput = container.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    const passwordInput = container.querySelector(
      'input[type="password"]',
    ) as HTMLInputElement;

    await fireEvent.input(emailInput, {
      target: { value: "test@example.com" },
    });
    await fireEvent.input(passwordInput, { target: { value: "password123" } });

    const form = container.querySelector("form") as HTMLFormElement;
    await fireEvent.submit(form);

    expect(mockOnSubmit).toHaveBeenCalledWith(
      {
        email: "test@example.com",
        password: "password123",
        newsletter: false,
      },
      expect.objectContaining({
        reset: expect.any(Function),
      }),
    );
  });

  it("shows validation errors on submit when validateOn='submit'", async () => {
    const mockOnSubmit = vi.fn();
    let formApi!: FormApi;

    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        validateOn: "submit",
        onSubmit: mockOnSubmit,
        expose: (api) => {
          formApi = api;
        },
      },
    });

    const isValid = await formApi.validate();
    expect(isValid).toBe(false);

    const form = container.querySelector("form") as HTMLFormElement;
    await fireEvent.submit(form);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("handles conditional fields with when function", async () => {
    const conditionalSchema = [
      {
        name: "show_extra",
        type: "checkbox" as const,
        label: "Show extra field",
      },
      {
        name: "extra_field",
        type: "text" as const,
        label: "Extra Field",
        when: (form: { show_extra?: boolean }) => form.show_extra === true,
      },
    ];

    const { container, queryByText } = render(Form, {
      props: { schema: conditionalSchema },
    });

    expect(queryByText("Extra Field")).toBeNull();

    const checkbox = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement;
    await fireEvent.click(checkbox);

    expect(queryByText("Extra Field")).toBeTruthy();
  });

  it("resets form values using expose API", async () => {
    let formApi!: FormApi;
    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        expose: (api) => {
          formApi = api;
        },
      },
    });

    const emailInput = container.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    await fireEvent.input(emailInput, {
      target: { value: "test@example.com" },
    });

    expect(emailInput.value).toBe("test@example.com");

    formApi.reset();

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(emailInput.value).toBe("");
  });

  it("handles select field type", async () => {
    const schemaWithSelect = [
      {
        name: "country",
        type: "select" as const,
        label: "Country",
        options: [
          { value: "us", label: "USA" },
          { value: "ca", label: "Canada" },
        ],
      },
    ];

    const { getByText } = render(Form, {
      props: { schema: schemaWithSelect },
    });

    expect(getByText("Country")).toBeTruthy();
  });

  it("applies compact mode styles", () => {
    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        compact: true,
      },
    });

    const form = container.querySelector("form");
    expect(form?.className).toContain("justify-items-center");
  });

  it("handles custom validators", async () => {
    const customValidator = vi.fn((value: unknown) =>
      typeof value === "string" && value.length < 3
        ? "Must be at least 3 characters"
        : null,
    );

    const schemaWithValidator = [
      {
        name: "username",
        type: "text" as const,
        label: "Username",
        validators: [customValidator],
      },
    ];

    const { container, findByText } = render(Form, {
      props: {
        schema: schemaWithValidator,
        validateOn: "blur",
      },
    });

    const usernameInput = container.querySelector(
      'input[type="text"]',
    ) as HTMLInputElement;
    await fireEvent.input(usernameInput, { target: { value: "ab" } });
    await fireEvent.blur(usernameInput);

    const error = await findByText("Must be at least 3 characters");
    expect(error).toBeTruthy();
    expect(customValidator).toHaveBeenCalledWith("ab", expect.any(Object));
  });

  it("handles number field type with parsing", async () => {
    const numberSchema = [
      {
        name: "age",
        type: "number" as const,
        label: "Age",
      },
    ];

    const mockOnChange = vi.fn();
    const { container } = render(Form, {
      props: {
        schema: numberSchema,
        onChange: mockOnChange,
      },
    });

    const ageInput = container.querySelector(
      'input[type="number"]',
    ) as HTMLInputElement;
    await fireEvent.input(ageInput, { target: { value: "25" } });

    expect(mockOnChange).toHaveBeenCalledWith({
      age: 25,
    });
  });

  it("applies custom label alignment", () => {
    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        labelAlign: "center",
      },
    });

    const labels = container.querySelectorAll('[class*="text-center"]');
    expect(labels.length).toBeGreaterThan(0);
  });

  it("generates deterministic form ids", () => {
    const { container: container1 } = render(Form, {
      props: { schema: basicSchema },
    });

    const { container: container2 } = render(Form, {
      props: { schema: basicSchema },
    });

    const form1 = container1.querySelector("form");
    const form2 = container2.querySelector("form");

    expect(form1?.id).toMatch(/^form-/);
    expect(form2?.id).toMatch(/^form-/);
  });

  it("submits form programmatically via expose API", async () => {
    const mockOnSubmit = vi.fn();
    let formApi!: FormApi;

    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        onSubmit: mockOnSubmit,
        expose: (api) => {
          formApi = api;
        },
      },
    });

    const emailInput = container.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    const passwordInput = container.querySelector(
      'input[type="password"]',
    ) as HTMLInputElement;

    await fireEvent.input(emailInput, {
      target: { value: "test@example.com" },
    });
    await fireEvent.input(passwordInput, { target: { value: "password123" } });

    await formApi.submit();

    expect(mockOnSubmit).toHaveBeenCalledWith(
      {
        email: "test@example.com",
        password: "password123",
        newsletter: false,
      },
      expect.any(Object),
    );
  });

  it("validates form programmatically via expose API", async () => {
    let formApi!: FormApi;

    render(Form, {
      props: {
        schema: basicSchema,
        expose: (api) => {
          formApi = api;
        },
      },
    });

    const isValid = await formApi.validate();
    expect(isValid).toBe(false);
  });

  it("gets form data via expose API", async () => {
    let formApi!: FormApi;

    const { container } = render(Form, {
      props: {
        schema: basicSchema,
        expose: (api) => {
          formApi = api;
        },
      },
    });

    const emailInput = container.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    await fireEvent.input(emailInput, {
      target: { value: "test@example.com" },
    });

    const formData = formApi.getData();
    expect(formData).toEqual({
      email: "test@example.com",
      password: "",
      newsletter: false,
    });
  });
});
