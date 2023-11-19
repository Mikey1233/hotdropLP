import React from "react";
import "./reason.css";
import { useRef, useEffect, useState } from "react";
import img from '../../Hotdrop-Assets/64c0f884ec637971912d4f67_Frame 9788-p-500.png'

function Reason() {
  const observer = useRef(null);
  const [fade, setFade] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("intersecting");
          setFade(true);
        } else {
          setFade(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.current.observe(containerRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [fade]); // Re-run the effect when the items change

  return (
    <div className="hot-drop__reason section__padding" ref={containerRef}>
       <div
        className={
          fade ? "hot-drop__reason-content " : "hot-drop__reason-content fade"
        }
      >
        <h3>Be the reason artists go viral.</h3>
        <p>
        Share hidden-gems with your friends. Be early on the next star in music.
        </p>
      </div>
      <div
        className={
          fade ? "hot-drop__reason-img" : "hot-drop__reason-img fade"
        }
      >
        <img src={img} alt="iphone13-mockup" />
      </div>
     
    </div>
  );
}
export default Reason;
