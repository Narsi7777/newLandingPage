// Middle.js
import React, { useRef, useEffect } from "react";
import videoFile from "../components/middleVideo.mp4";
import cardFrontImg1 from "../components/2series2.webp";
import cardFrontImg2 from "../components/bmwZ4.webp";
import cardFrontImg3 from "../components/xb7.webp";
import cardFrontImg4 from "../components/5series.png";
import cardFrontImg5 from "../components/x6M.png";
import cardFrontImg6 from "../components/m3.webp";
import Card from "./Card"; 

function Middle() {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay muted loop className="background-video">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <h2 style={{color:"red",textAlign:"center",animation:"slidein 10s infinite"}}>Please Hover On the Car Correctly </h2>
        <p style={{color:"blue",textAlign:"center",animation:"slidein 10s infinite"}}>Click On Any Car To Open More...</p>
      <div className="grid-container">
        <a href="https://www.bmwusa.com/vehicles/2-series/overview.html"><Card cardFrontImg={cardFrontImg1} title="2 Series Gran coupe" description="Description 1" /></a>
        <a href="https://www.bmwusa.com/vehicles/z-series/roadster/bmw-z4-sdrive30i-roadster.html#designyourown"><Card cardFrontImg={cardFrontImg2} title="Z4 sDrive30i" description="Description 2" /></a>
        <a href="https://www.bmwusa.com/vehicles/x-models/x7/suv/overview.html"><Card cardFrontImg={cardFrontImg3} title="ALPINA XB7" description="4.4-liter Bi-Turbo V-8, 32-valve 631-hp engine" /></a>
        <a href="https://www.bmwusa.com/vehicles/5-series/sedan/overview.html"><Card cardFrontImg={cardFrontImg4} title=" BMW 530i" description="2.0-liter BMW TwinPower Turbo" /></a>
        <a href="https://www.bmwusa.com/vehicles/x-models/x6/suv/overview.html"><Card cardFrontImg={cardFrontImg5} title="X6 M60i" description="4.4-liter BMW M TwinPower Turbo V-8" /></a>
        <a href="https://www.bmwusa.com/vehicles/3-series/sedan/overview.html"><Card cardFrontImg={cardFrontImg6} title="M3 SEDAN" description="Description 6" /></a>
      </div>
    </div>);
}

export default Middle;


