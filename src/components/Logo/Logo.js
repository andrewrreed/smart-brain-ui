import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import logo from "./light.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        tiltReverse={true}
        className="Tilt shadow-3 br2 pa3"
        style={{ height: 150, width: 150 }}
      >
        <div>
          <img src={logo} alt="logo"></img>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
