import { screen, waitFor } from "@testing-library/react";
import Header from "../Header/Header";
import { renderWithProviders } from "../../../mocks/redux";

describe("TESTING COMPONENT HEADER", () => {
  it("should render header and click logout", async () => {
    renderWithProviders(<Header />);

    await waitFor(() => {
      const buttonLogout = screen.getByTestId("email-logout");

      expect(buttonLogout).toBeInTheDocument();
    });
  });
});
