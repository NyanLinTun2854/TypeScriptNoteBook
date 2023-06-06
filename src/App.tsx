import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  type C = {
    baba: string;
    wawa: number;
  };

  let c: C = {
    baba: "baba",
    wawa: 23,
  };

  console.log(c);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
    </div>
  );
};

export default App;
