import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { LoginContextProvider } from "./../store/login-context";

import Input from "../components/Input/Input.jsx";

const renderInput = () => {
  return render(
    <LoginContextProvider>
      <Input />
    </LoginContextProvider>
  );
};

describe("input", () => {
  it("should render input", () => {
    renderInput();
  });

  it("should be a button", () => {
    renderInput();

    const submit = screen.getByText(/submit/i);

    expect(submit).toBeDefined();
  });

  it("should be a form", () => {
    renderInput();

    const form = screen.findByRole("form");
    expect(form).toBeDefined();
  });

  it("should submit ", async () => {
    renderInput();

    const imageUpload = screen.getByTestId("file-upload");

    expect(imageUpload).toBeDefined();
  });
});
