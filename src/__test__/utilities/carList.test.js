import React from "react";
import { describe, expect, test } from "@jest/globals";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import CarList from "../../components/CarList/CarList"; 
import { renderWithProviders } from "../../mocks/redux";

describe("handleCloseDeleteModal", () => {
  test("should update state variables correctly", async () => {
    renderWithProviders(<CarList />);

    const deleteButton = await screen.findByTestId("delete-button-modal"); 
    fireEvent.click(deleteButton);

    const deleteModal = await screen.findByTestId("modal-delete");

    await waitFor(() => {
      expect(deleteModal).toBeVisible();
    });
  });
});
