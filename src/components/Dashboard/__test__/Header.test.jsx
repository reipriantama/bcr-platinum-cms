import { fireEvent, screen } from "@testing-library/react";
import Header from "../Header/Header";
import { renderWithProviders } from "../../../mocks/redux";

describe("TESTING COMPONENT HEADER", () => {
  renderWithProviders(<Header />);
  it("should render header", async () => {
    const button = await screen.findByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Search");
  });

  it("should success click logout", async () => {
    const buttonLogout = await screen.findByRole("logout");

    fireEvent.click(buttonLogout);
  });
});
