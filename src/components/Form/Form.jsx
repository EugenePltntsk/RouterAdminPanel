import React, { useState } from "react";

const admin = "admin";
const pass = "12345";

export default function Form({ setIsLoggedIn }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login === admin && password === pass) {
      setIsLoggedIn(true);
      setLogin("");
      setPassword("");
      return alert("You have successfully logged in");
    }
    alert("No such login or password");
  };

  const handleChangeInput = (e) => {
    switch (e.target.name) {
      case "login":
        setLogin(e.target.value);
        break;

      case "password":
        setPassword(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="login"
        value={login}
        onChange={handleChangeInput}
        type="text"
      />
      <input
        name="password"
        value={password}
        onChange={handleChangeInput}
        type="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
