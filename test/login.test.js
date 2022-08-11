import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginForm from "../components/Login/LoginForm/LoginForm";
import { LoginContextProvider } from "../store/login-context.js";

beforeEach(() => {
  render(
    <LoginContextProvider>
      <LoginForm />
    </LoginContextProvider>
  );
});

describe("Test login component", () => {
  it("Render test component", () => {
    expect(screen).not.toBe();
  });

  it("Should be Login title", () => {
    const title = screen.getByText(/login/i);
    const text = title.textContent;

    expect(text).toContain("Login");
  });

  it("Should send login request", async () => {
    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button");

    userEvent.type(username, "admin");
    userEvent.type(password, "pass");

    fireEvent.click(submit);

    const spinner = await screen.findByLabelText("spinner");

    expect(spinner).toBeVisible();
    expect(spinner).toContainHTML(
      '<div aria-label="spinner" class="loader-container"><span class="loader" /></div>'
    );
  });

  it("Should show error toast if is not successful", async () => {
    const username = screen.getByLabelText(/username/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button");

    userEvent.type(username, "admin1");
    userEvent.type(password, "pass1");
    fireEvent.click(submit);

    const errorToast = await screen.findAllByText(/error/i);

    expect(errorToast).toBeDefined();
  });
});
