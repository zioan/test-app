import React from "react";
import Myname from "./components/Myname";
import "./App.css";

function App() {
  const name = "Zioan";
  return (
    <div className="App">
      <Myname name={name} />
    </div>
  );
}

export default App;
