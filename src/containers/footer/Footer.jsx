import React from "react";
import "./footer.css";
import logo from "../../Hotdrop-Assets/630e348760dd00d247034585_Logo for web.svg";
import appStore from "../../Hotdrop-Assets/630e348760dd005ab603454f_apple-badge.svg";
import linkedin from "../../Hotdrop-Assets/630e348760dd00482703454b_linkedin - icon.svg";
import instagram from "../../Hotdrop-Assets/630e348760dd0053b9034549_instagram - icon.svg";
import twitter from '../../Hotdrop-Assets/630e348760dd0059ba03455e_twitter.svg'
import tiktok from '../../Hotdrop-Assets/630e348760dd004f91034555_tik-tok.svg'
function Footer() {
  return (
    <div className="hot-drop__footer section__padding">
      <div className="hot-drop__footer-brands">
        <div className="hot-drop__footer-brands__logo">
          <img src={logo} alt="logo" />
          <img src={appStore} alt="logoApple" className="desktop-brand"/>
        </div>
        <div className="hot-drop__footer-brands__nav">
          <nav>
            <ul>
              <li>Get in touch</li>
              <li>About</li>
              <li>Join our team</li>
              <li>Press kit</li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>DMCA Claim</li>
              <li>Counter Claim</li>
          <img src={appStore} alt="logoApple" className="mobile-brand"/>

            </ul>
          </nav>
        </div>
      </div>

      <div className="hot-drop__footer-copyrights">
        <p>@ copyright 2023.HotDrop,Inc . All rights reserved</p>
        <div className="hot-drop__footer-copyrights-img">
             <img src={linkedin} alt="linkedin"/>
             <img src={instagram} alt="instagram"/>
             <img src={twitter} alt="twitter"/>
             <img src={tiktok} alt="tiktok"/>

        </div>
      </div>
    </div>
  );
}

export default Footer;
