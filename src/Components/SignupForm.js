import React, { useState } from "react";
import "./SignupForm.css";
const SignupForm = (props) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="main-content">
      <h1> SIGN UP HERE!</h1>
      <div className="details">
        <label htmlFor="name">Enter your name</label>
        <input type="text" name="" id="name" placeholder="Salman Khan" />
      </div>
      <div className="details">
        <label htmlFor="number">Enter your number</label>
        <input type="number" id="number" placeholder="XXXXXXXXXX" />
      </div>

      <div className="details">
        <label htmlFor="Username">Enter your Username</label>
        <input type="text" id="username" placeholder="abcd@gmail.com" />
      </div>

      <div className="details">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="*******"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="button" onClick={handleShowPassword}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <button
        className="task-done"
        type="submit"
        onClick={() => {
          window.alert("Registered Successfully, Please login!");
          props.switcher("login");
        }}
      >
        Register
      </button>
      <br />
      <br />
      <button
        className="switch"
        onClick={() => {
          props.switcher("login");
        }}
      >
        Already have an account? Login Here
      </button>
    </div>
  );
};

export default SignupForm;
