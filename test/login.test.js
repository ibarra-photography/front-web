import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { LoginContextProvider } from "./../store/login-context";

import Input from "../components/Input/Input.jsx";
import usePostImage from "components/Hooks/usePostImage";

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

describe("usePost image", () => {
  it("should render usePostImage ", async () => {
    renderInput();
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    const imageUpload = screen.getByTestId("file-upload");

    userEvent.type(imageUpload, "Photo");

    fireEvent.click(submitButton);

    // const Error = await screen.findAllByText(/Error/i);
    const success = await screen.findAllByText(/File uploaded/i);

    expect(loading).toHaveLength(1);
  });
});
