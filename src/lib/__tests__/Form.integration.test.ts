// $lib/__tests__/Form.integration.test.ts
import { render, fireEvent } from "@testing-library/svelte";
import { describe, it, expect, vi } from "vitest";
import Form from "../Form.svelte";

describe("Form Integration", () => {
  it("completes full form flow with validation and submission", async () => {
    const mockOnSubmit = vi.fn();

    const schema = [
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
        validators: [
          (v: unknown) =>
            typeof v === "string" && v.length < 6 ? "Password too short" : null,
        ],
      },
      {
        name: "agree",
        type: "checkbox" as const,
        label: "I agree to terms",
        required: true,
      },
    ];

    const { container } = render(Form, {
      props: { schema, onSubmit: mockOnSubmit },
    });

    const emailInput = container.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    const passwordInput = container.querySelector(
      'input[type="password"]',
    ) as HTMLInputElement;
    const checkbox = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement;

    await fireEvent.input(emailInput, {
      target: { value: "valid@example.com" },
    });
    await fireEvent.input(passwordInput, {
      target: { value: "securepassword" },
    });
    await fireEvent.click(checkbox);

    await new Promise((resolve) => setTimeout(resolve, 50));

    const form = container.querySelector("form") as HTMLFormElement;
    await fireEvent.submit(form);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(mockOnSubmit).toHaveBeenCalledWith(
      {
        email: "valid@example.com",
        password: "securepassword",
        agree: true,
      },
      expect.any(Object),
    );
  });

  it("handles dynamic field visibility correctly", async () => {
    const schema = [
      {
        name: "has_address",
        type: "checkbox" as const,
        label: "Add address",
      },
      {
        name: "address",
        type: "text" as const,
        label: "Street Address",
        when: (form: { has_address?: boolean }) => form.has_address === true,
      },
      {
        name: "city",
        type: "text" as const,
        label: "City",
        when: (form: { has_address?: boolean }) => form.has_address === true,
      },
    ];

    const { container, queryByText } = render(Form, {
      props: { schema },
    });

    expect(queryByText("Street Address")).toBeNull();
    expect(queryByText("City")).toBeNull();

    const checkbox = container.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement;
    await fireEvent.click(checkbox);

    expect(queryByText("Street Address")).toBeTruthy();
    expect(queryByText("City")).toBeTruthy();

    await fireEvent.click(checkbox);

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(queryByText("Street Address")).toBeNull();
    expect(queryByText("City")).toBeNull();
  });
});
