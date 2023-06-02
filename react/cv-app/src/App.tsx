import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Nav />
      <Introduction />
      <Projects />
    </div>
  );
}

export default App;
