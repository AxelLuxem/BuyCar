import { useState, useEffect } from "react";
import PasswordInput from "../components/PasswordInput";
import axios from "axios";

import { validateEmail } from "../helper/validateEmail";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !email.trim() ||
      userName.trim() === "" ||
      !password.trim() ||
      !validateEmail(email.trim())
    ) {
      setError("Please enter a valid email and password");
    } else {
      try {
        console.log("in the try catch");
        const response = await axios.post(
          "http://localhost:3000/users/sign-up",
          {
            email,
            userName,
            password,
          }
        );
        localStorage.setItem("token", response.data.token);
      } catch (error) {
        console.log(
          `catch error: ${error.response.data.message}`
        );
        setError(error.response.data.message);
        return;
      }
    }
  };

  useEffect(() => {
    if (error) {
      setError("");
    }
  }, [email, userName, password]);

  return (
    <div className="loginPageWrapper">
      <div className="loginPageTitlewrapper">
        <h1 className="title">Sign up</h1>
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
          type="email"
        />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="inputBox"
          placeholder="Username"
          type="text"
        />
        <div>
          <PasswordInput
            value={password}
            onChange={setPassword}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
