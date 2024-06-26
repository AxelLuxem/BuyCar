import { useState, useEffect } from "react";
import PasswordInput from "../components/PasswordInput";
import axios from "axios";

import { validateEmail } from "../helper/validateEmail";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !email.trim() ||
      !password.trim() ||
      !validateEmail(email.trim())
    ) {
      setError("Please enter a valid email and password");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/login",
          {
            email,
            password,
          }
        );
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        setError(error.response.data.message);
        return;
      }
      console.log("OK!");
    }
  };

  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [email, password]);

  return (
    <div className="loginPageWrapper">
      <div className="loginPageTitlewrapper">
        <h1 className="title">Login</h1>
      </div>
      <form
        id="loginForm"
        onSubmit={submitHandler}
        className="formWrapper"
      >
        <input
          className="inputBox"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <PasswordInput
            value={password}
            onChange={setPassword}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
