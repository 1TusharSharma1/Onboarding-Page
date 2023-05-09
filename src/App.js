import { useState } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import DDashboard from "./Components/Dashboard";
function App() {
  const [disp, setDisp] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const toggle = (content) => {
    setDisp(content);
  };

  const logger = (state) => {
    setIsLoggedIn(state);
    localStorage.setItem("isLoggedIn", 1);
    console.log("running")
  };

  const checker = localStorage.getItem("isLoggedIn");

  return (
    <div className="App">
      {checker === "1" ? (
        <DDashboard func = {logger}/>
      ) : disp === "login" ? (
        <LoginForm switcher={toggle} func = {logger}/>
      ) : (
        <SignupForm switcher={toggle}/>
      )}
    </div>
  );
}

export default App;
