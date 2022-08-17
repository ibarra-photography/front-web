import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { LoginContextProvider } from "../store/login-context";

import Input from "../components/Input/Input.jsx";

const renderInput = () => {
  return render(
    <LoginContextProvider>
      <Input />
    </LoginContextProvider>
  );
};

describe("Post image", () => {
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

  it("should render success at sending fulfilled form ", async () => {
    renderInput();
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    const imageUpload = screen.getByTestId("file-upload");

    const fakePhoto = new File(["hello"], "hello.png", { type: "image/png" });

    await userEvent.upload(imageUpload, fakePhoto);

    fireEvent.click(submitButton);

    const success = await screen.findAllByText(/success/i);

    expect(success).toHaveLength(1);
  });
});