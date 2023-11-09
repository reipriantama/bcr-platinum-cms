import renderer from "react-test-renderer";
import { describe, expect, test } from "@jest/globals";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import {
  rawRenderWithProviders,
  renderWithProviders,
} from "../../../../mocks/redux";
import { mockLocalStorage } from "../../../../mocks/localStorage";
import Login from "../../../../components/LoginFeature/LoginFeature";

describe("Login", () => {
  const { setItemMock } = mockLocalStorage();

  test("Login component should match with snapshot", () => {
    const component = renderer
      .create(rawRenderWithProviders(<Login />))
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test("Alert should be visible when loginAdmin failed", async () => {
    renderWithProviders(<Login />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-input");

    fireEvent.change(emailInput, {
      target: {
        value: "test@test.id",
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: "123456",
      },
    });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByTestId("alert-login")).toBeVisible();
    });
  });

  test("token in localStorage should match with expected value", async () => {
    renderWithProviders(<Login />);

    const emailInput = screen.getByTestId("email-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-input");

    fireEvent.change(emailInput, {
      target: {
        value: "admin@bcr.io",
      },
    });
    fireEvent.change(passwordInput, {
      target: {
        value: "123456",
      },
    });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(setItemMock).toHaveBeenCalledWith("token", "dummy-token");
    });
  });
});
