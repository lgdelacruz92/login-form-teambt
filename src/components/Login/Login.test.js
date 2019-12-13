import React from "react";
import * as RTL from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "components/Login";

describe("Login Test", () => {
  test("render test", () => {
    RTL.render(
      <Login onLogin={() => {}} onSignUp={() => {}} onRememberMe={() => {}} />
    );
  });

  test("render test", () => {
    const onLogin = jest.fn();
    const onSignUp = jest.fn();
    const login = RTL.render(
      <Login onLogin={onLogin} onSignUp={onSignUp} onRememberMe={() => {}} />
    );

    RTL.fireEvent.change(login.getByTestId("email-input-field"), {
      target: { value: "email" }
    });
    RTL.fireEvent.change(login.getByTestId("password-input-field"), {
      target: { value: "password" }
    });
    RTL.fireEvent.click(login.getByText("LOGIN"));

    expect(onLogin).toBeCalledWith({
      email: "email",
      password: "password"
    });
  });
});
