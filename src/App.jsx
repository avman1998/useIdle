import { useState } from "react";
import useIdle from "./useIdle";
import "./App.css";

function App() {
  const isIdle = useIdle(3000);
  return <div>User is {isIdle ? "Idle" : "Active"}</div>;
}

export default App;
