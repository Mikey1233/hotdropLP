import React from "react";
import "./promote.css";
import imgGroup from "../../Hotdrop-Assets/637a9f98ecc8b47c728bbeba_Group 1299-2_macbookgrey_front-p-800.png";
function Promote() {
  return (
    <div className="hot-drop__promote section__padding">
        <div className={"hot-drop__promote-img"}>
        <img src={imgGroup} alt="iphone13-mockup" />
      </div>
      <div className={"hot-drop__promote-content "}>
        <h3>Artists promote directly to Gen-Z.</h3>
        <p>
          Upload your songs, reach new superfans, and build community.<br/> <span className="sign">Sign up</span>
          for HotDrop Studio.
        </p>
      </div>
    
    </div>
  );
}

export default Promote;
