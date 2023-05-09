import React, {useState } from "react";
import "./LoginForm.css";
// import DDashboard from "./Dashboard";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   localStorage.setItem("isLoggedIn", 1);
  //   console.log(username);
  //   console.log(password);

  // };
  
  return (
    <div className="main-content">
      <h1>Welcome Back, Please Sign-In</h1>
      <div className="username-wrapper">
        <label className="usn" htmlFor="username">
          Username/Email
        </label>
        <br />
        <input
          type="text"
          id="username"
          placeholder="abcd@gmail.com"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <br />
      <div>
        <div className="password-wrapper">
          <label className="ps" htmlFor="password">
            Password
          </label>
          <br />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="***********************"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="button" onClick={handleShowPassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>{" "}
      <br />
      <button className="task-done" type="submit" onClick={()=>{props.func("true")}}>
        Login
      </button>
      <br />
      <br />
      <button
        className="switch"
        onClick={() => {
          props.switcher("register");
        }}
      >
        Dont have an account? Register Here!
      </button>
    </div>
  );
};

export default Login;
