import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setColor] = useState("white");

  const clicked = () => {
    return setColor((current) => (current === "white" ? "black" : "white"));
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <button onClick={clicked}>Switch Theme</button>
    </div>
  );
}

export default App;
