import { useState, useEffect } from "react";
import PasswordInput from "../components/PasswordInput";

import { validateEmail } from "../helper/validateEmail";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    if (
      !email.trim() ||
      !password.trim() ||
      !validateEmail(email.trim())
    ) {
      setError("Please enter a valid email and password");
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
        />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="inputBox"
          placeholder="Username"
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
