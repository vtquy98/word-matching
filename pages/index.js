import React from "react";
import LoginFormComponent from "../components/Login/LoginFormComponent";

const App = () => {
  return (
    <div>
      <img src="/image/background.jpg" className="background" />
      <div>
        <h1>Word matching</h1>
      </div>
      <LoginFormComponent />
    </div>
  );
};

export default App;
