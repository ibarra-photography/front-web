import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { LoginContextProvider } from "./../store/login-context";
import { fetchApiData } from "../handlers/getApiData";

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

  test("fetch api data", async () => {
    const res = await fetchApiData();
    expect(res.status).toBe(202);
  });

  it("should render error at usePostImage ", async () => {
    renderInput();
    const submitButton = screen.getByRole("button", { name: /Submit/i });
    const imageUpload = screen.getByTestId("file-upload");

    userEvent.type(imageUpload, "Photo");

    fireEvent.click(submitButton);

    const success = await screen.findAllByText(/success/i);

    expect(success).toHaveLength(1);
  });
});
