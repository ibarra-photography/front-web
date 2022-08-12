const { render } = require("@testing-library/react");
import PhotoCardsGrid from "components/PhotoCardsGrid/PhotoCardsGrid.jsx";

describe("photo card grid from gallery", () => {
  it("should render the page", () => {
    render(<PhotoCardsGrid />);
  });
});
