import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Login />
      {/* <div className="bg-amber-300">Main-Page</div> */}
    </>
  );
}

export default App;
