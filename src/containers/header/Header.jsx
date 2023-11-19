import React from "react";
import "./header.css";
import logo from "../../Hotdrop-Assets/630e348760dd00d247034585_Logo for web.svg";
import hero from "../../Hotdrop-Assets/64d27e7e6e11616a16a7a391_Group 36770.png";
import { useState } from "react";
// const Tab = function ({change}) {
//   return (
   
//   );
// };
const MobileMenu = function ({ mobile }) {
  const [change,setChange]= useState(true)
  return (
    <div className={mobile ? "Hot-drop__header-list" : "mobile"}>
      <ul className={change ? "ul":'ul active'}>
        <li>
          <a href="#">Get in touch</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Join our team</a>
        </li>
      </ul>
      <div className="menu" onClick={()=> change ? setChange(false):setChange(true)}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
    </div>
  );
};
function Header() {
  return (
    <div className="Hot-drop__header section__padding">
      <nav>
        <div className="Hot-drop__header-nav">
          <div className="Hot-drop__header-img">
            <img src={logo} alt="logo" />
          </div>
          <MobileMenu mobile={true} />
          <MobileMenu mobile={false} />
        </div>
      </nav>

      <div className="Hot-drop__header-body">
        <div className="Hot-drop__header-body-content">
          <h1>
            Discover music.
            <br />
            <span className="pink-text">Support artists.</span>
          </h1>
          <p>
            Stuck listening to the same mainstream songs and artists on-repeat?
          </p>
          <p>
            Keep your music taste fresh with millions of new songs you've never
            heard before.
          </p>
          <p>Join the movement, become a superfan.</p>
          <div className="Hot-drop__header-body-content-btns">
            <button type="button" className="btn1">
              DISCOVER MUSIC
            </button>
            <button type="button" className="btn2">
              PROMOTE MUSIC
            </button>
          </div>
        </div>
        <div className="Hot-drop__header-body-hero">
          <img src={hero} alt="hero-pic" />
        </div>
      </div>
    </div>
  );
}

export default Header;
