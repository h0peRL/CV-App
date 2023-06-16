import React from "react";
import Uppertriangle from "..//images/Uppertriangle.png";

function Nav() {
  return (
    <div>
      <div className="triangle">
        <img src={Uppertriangle} alt="" />
      </div>
      <div className="navigation">
        <nav className="Navigation">
          <ul className="ul">
            <li>
              <a href="#art" className="hvr-underline-from-left">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hvr-underline-from-left">
                My Projects
              </a>
            </li>
            <li>
              <a href="#contactform" className="hvr-underline-from-left">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
