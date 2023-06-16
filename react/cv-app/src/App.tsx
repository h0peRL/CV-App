import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
