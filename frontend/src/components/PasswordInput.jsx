import { useState, useEffect } from "react";

import "./PasswordInput.css";

const icon = () => {
  const password = document.getElementById("passwordInput");
  const inputType = password.getAttribute("type");
  if (inputType === "text") {
    return "passwordShownIcon.png";
  } else {
    return "passwordHiddenIcon.png";
  }
};

const PasswordInput = ({ value, onChange }) => {
  const [imageSource, setImageSource] = useState("");

  const togglePassword = () => {
    const password = document.getElementById("passwordInput");
    const inputType =
      password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", inputType);

    setImageSource(icon());
  };

  useEffect(() => {
    setImageSource(icon());
  }, []);

  return (
    <div className="passwordContainer">
      <input
        id="passwordInput"
        type="password"
        className="passwordInputBox"
        placeholder="Password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="showPasswordButton" onClick={togglePassword}>
        <img src={imageSource} className="showPasswordIcon" />
      </div>
    </div>
  );
};

export default PasswordInput;
