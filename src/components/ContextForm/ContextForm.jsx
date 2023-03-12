import { AuthContext } from "context/AuthContext";
import React, { useState } from "react";
import { useContext } from "react";

const admin = "admin";
const pass = "12345";

export default function ContextForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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

  const {auth} = useContext(AuthContext);
  

  const handleSubmit =(e)=> {
    e.preventDefault();
auth({loginUser: login, passwordUser: password})
  }

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
