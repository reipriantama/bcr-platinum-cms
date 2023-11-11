import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CarList from "../../components/CarList/CarList"; // Ganti dengan path file Anda

describe("handleCloseDeleteModal", () => {
  it("should update state variables correctly", () => {
    const setCarToDeleteIdMock = jest.fn();
    const setShowDeleteModalMock = jest.fn();

    jest
      .spyOn(React, "useState")
      .mockReturnValueOnce(null)
      .mockReturnValueOnce(false);

    React.useState.mockImplementation((initialValue) => {
      return initialValue === null
        ? [null, setCarToDeleteIdMock]
        : [false, setShowDeleteModalMock];
    });

    render(<CarList />);

    // Open the delete modal first (replace with your actual logic to open the modal)
    // For example, you can simulate clicking the delete button of a car
    const deleteButton = screen.getByText("Delete"); // Replace with your actual logic
    fireEvent.click(deleteButton);

    // Verify that the delete modal is open
    const deleteModal = screen.getByText("Menghapus Data Mobil"); // Replace with the actual modal title
    expect(deleteModal).toBeInTheDocument();

    // Call handleCloseDeleteModal to close the modal
    const closeButton = screen.getByText("Cancel"); // Replace with the actual cancel button label
    fireEvent.click(closeButton);

    // Verify that the delete modal is closed
    expect(screen.queryByText("Menghapus Data Mobil")).toBeNull();

    // Verify that state variables are updated
    expect(setCarToDeleteIdMock).toHaveBeenCalledWith(null);
    expect(setShowDeleteModalMock).toHaveBeenCalledWith(false);
  });
});
