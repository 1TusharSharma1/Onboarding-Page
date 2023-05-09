import React from "react";

const DDashboard = (props) => {
  const logoutHandler = () => {
    localStorage.clear();
  };
  return (
    <>
      <h1> DASHBOARD</h1>
      <br /> <br /> <br /> <br />
      <h3>"Welcome back"</h3>
      <br /> <br /> <br /> <br />
      <button
        onClick={() => {
          props.func("false");
          logoutHandler();
        }}
      >
        Logout
      </button>
    </>
  );
};
export default DDashboard;
