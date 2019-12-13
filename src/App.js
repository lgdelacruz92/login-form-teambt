import React from "react";
import "./App.css";
import Login from "components/Login";

function App() {
  return (
    <div className="App">
      <Login
        onLogin={() => {}}
        onSignUp={() => {}}
        onRememberMe={rememberMe => console.log(rememberMe)}
      />
    </div>
  );
}

export default App;
