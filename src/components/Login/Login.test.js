import React from "react";
import * as RTL from "@testing-library/react";
import Login from "components/Login";

describe("Login Test", () => {
  test("render test", () => {
    RTL.render(
      <Login onLogin={() => {}} onSignUp={() => {}} onRememberMe={() => {}} />
    );
  });

  test("render test", () => {
    RTL.render(
      <Login onLogin={() => {}} onSignUp={() => {}} onRememberMe={() => {}} />
    );
  });
});
