import React from "react";
import "./featured.css";
import img1 from "../../Hotdrop-Assets/63980dce3e8200701d125e27_F1.png";
import img2 from "../../Hotdrop-Assets/63980dcde7aba3a29be95809_F2.png";
import img3 from "../../Hotdrop-Assets/63980dce67761f561f271dbb_F3.png";
import img4 from "../../Hotdrop-Assets/63980dce1925274830086792_F4.png";
import techStars from "../../Hotdrop-Assets/632149ed41e0510de6e577ad_Techstars_Blinking.png";
import ven from '../../Hotdrop-Assets/ven.png'
function Featured() {
  return (
    <div className="Hot-drop__featured section__padding">
      <div className="Hot-drop__featured-in">
        <div className="Hot-drop__featured-in-title">
          <h2>Featured in</h2>
        </div>
        <div className="Hot-drop__featured-in-companies">
          <div>
            <img src={img1} alt="img1" />
          </div>
          <div>
            <img src={img2} alt="img2" />
          </div>
          <div>
            <img src={img3} alt="img3" />
          </div>
          <div>
            <img src={img4} alt="img4" />
          </div>
        </div>
      </div>
      <div className="Hot-drop__featured-brands">
        <div className="Hot-drop__featured-brands-title">
          <h2>A proud portfolio company of </h2>
        </div>
        <div className="Hot-drop__featured-brands-img">
          <img src={techStars} alt="tech-stars-pic" />
          {/* <img src={venture} alt="ventures-logo" /> */}
          <img src={ven} alt="ven"/>
        </div>
      </div>
    </div>
  );
}

export default Featured;
