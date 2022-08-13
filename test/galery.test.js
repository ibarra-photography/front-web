import { render, screen } from "@testing-library/react";

import PhotoCardsGrid from "components/PhotoCardsGrid/PhotoCardsGrid.jsx";

beforeEach(() => {
  render(<PhotoCardsGrid />);
});

describe("photo card grid from gallery", () => {
  it("should render the page", () => {
    render(<PhotoCardsGrid />);
  });

  it("it should render 8 spinner", async () => {
    const spinners = await screen.findAllByLabelText("spinner");

    expect(spinners).toHaveLength(8);
  });
});
