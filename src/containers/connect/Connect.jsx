import React from "react";
import "./connect.css";
import phone from '../../Hotdrop-Assets/64c8e9690a05a8dc4ae71eb5_Group 36745.png'
// const interSection = new IntersectionObserver()
function Connect() {
  return (
    <div className="Hot-drop__connect section__padding">
      <div className="Hot-drop__connect-content">
        <h2>Connect with new artists & support <br/>their journey</h2>
        <p>90% of artists are invisble.We put artists stories in the spotlight</p>
      </div>
      <div className="Hot-drop__connect-hero">
        <img src={phone} alt="phone"/>
      </div>
    </div>
  );
}

export default Connect;
