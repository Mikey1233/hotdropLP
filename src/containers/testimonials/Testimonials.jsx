import React from "react";
import "./testimonials.css";
import TextBox from "../../textBox/TextBox";
import img1 from "../../Hotdrop-Assets/image-avatar.png";
import img2 from "../../Hotdrop-Assets/image-emily.jpg";
import img3 from "../../Hotdrop-Assets/image-jennie.jpg";
import img4 from "../../Hotdrop-Assets/image-thomas.jpg";

const testimonialsData = [
  {
    data: "every student needs hotdrop - charles",
    img: img1,
  },
  {
    data: "'ive waited for years for an app like hot-drop' - kate",
    img: img2,
  },
  {
    data:"Hotdrop and sportify is ultimate combo - Aaron",
    img:img3
  },
  {
    data:"Hotdrop is the #1 app for music - ben",
    img:img4
  },
  {
    data:"'best app for streaming songs - allen'",
    img:img1
  },
  {
    data:"every student needs hotdrop - charles",
    img:img3
  }
];
function Testimonials() {
  return (
    <div className="overflow">
      <div className="hot-drop__testimonials ">
        <div className="hot-drop__testimonials-title">
          <h2>Testimonials</h2>
        </div>
        <div className="hot1">
         {
          testimonialsData.map(dat => <TextBox text={dat.data} img={dat.img}/>)
         }
        </div>

        <div className="hot2">

          {testimonialsData.map(dat => <TextBox text={dat.data} img={dat.img}/>)}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
