import React from "react";
import "./control.css";
import iphone13 from "../../Hotdrop-Assets/64c0f884d8a202f2d339540a_iPhone-13-Pro-Front-p-500.png";
import { useRef, useEffect, useState } from "react";

// const InfiniteScroll = () => {
//   const [items, setItems] = useState([]);
//   const observer = useRef(null);
//   const containerRef = useRef(null);

//   const fetchData = () => {
//     // Fetch more data and update the state (items) accordingly
//     // For demonstration purposes, let's just add some dummy data
//     const newItems = Array.from({ length: 10 }, (_, index) => `Item ${items.length + index + 1}`);
//     setItems((prevItems) => [...prevItems, ...newItems]);
//   };

//   useEffect(() => {
//     observer.current = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           // When the target element is intersecting with the viewport,
//           // fetch more data to load
//           fetchData();
//         }
//       },
//       { threshold: 1 } // 1 means fully visible
//     );

//     if (containerRef.current) {
//       observer.current.observe(containerRef.current);
//     }

//     // Cleanup the observer when the component is unmounted
//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, [items]); // Re-run the effect when the items change

//   // return (
//   //   <div>
//   //     <div style={{ height: '400px', overflowY: 'scroll' }} ref={containerRef}>
//   //       {/* Render your list of items here */}
//   //       {items.map((item, index) => (
//   //         <div key={index} style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
//   //           {item}
//   //         </div>
//   //       ))}
//   //     </div>
//   //   </div>
//   // );
// };

// export default InfiniteScroll;

function Control() {
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
    <div className="hot-drop__control section__padding" ref={containerRef}>
      <div   className={
            fade ? "hot-drop__control-img" : "hot-drop__control-img fade"
          }>
        <img
          src={iphone13}
          alt="iphone13-mockup"
        
        />
      </div>
      <div
        className={
          fade ? "hot-drop__control-content " : "hot-drop__control-content fade"
        }
      >
        <h2>You control the discovery experience.</h2>
        <p>
          Explore a feed of new music you haven't heard before – guaranteed.
        </p>
      </div>
    </div>
  );
}

export default Control;
