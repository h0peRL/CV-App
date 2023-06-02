import React from "react";
import Avatar from "../images/avatar.gif";

function Introduction() {
  return (
    <div>
      <div id="art">
        <img src={Avatar} alt="GIF" className="avatar" id="gif" />
      </div>
      <div className="introduction">
        <h1 className="title">Hello! My Name is Nico.</h1>
        <h1 className="text">Im a software developer in education!</h1>
        <h3 className="text">
          I am currently beeing educated as a software developer at the BBBaden.
        </h3>
      </div>
    </div>
  );
}

export default Introduction;
