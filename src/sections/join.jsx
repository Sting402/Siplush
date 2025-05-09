import React, { useState, useEffect, useRef } from "react";
import "../style/join.css";
import Unbox from "../assets/video/Unboxing - approved.mp4";
import Review from "../assets/video/Product review - approved.mp4";
import Demo from "../assets/video/Demo.mp4";
const JoinBrandSection = () => {


  return (
    <section id="JoinBrandsSection" className="join-section">
      
      <div className="join-container">
        <h1 className="title">See what our community says about SIPLUSH!</h1>
        <div className="join-media-wrap">
<div className="join-media">
<video
            src={Unbox}
            className="join-video"
            autoPlay
            loop
            muted
            playsInline
          ></video><p className="join-p">“I love SIPLUSH because I was always struggling finding cute shaker — @beatrizpdcosta
</p></div>
<div className="join-media">
<video
            src={Review}
            className="join-video"
            autoPlay
            loop
            muted
            playsInline
          ></video><p className="join-p">“I love SIPLUSH because It’s stylish, functional, and super practical. — @soyjuferraz
</p></div>
<div className="join-media">
<video
            src={Demo}
            className="join-video"
            autoPlay
            loop
            muted
            playsInline
          ></video><p className="join-p">“I love SIPLUSH because It’s easy to use,  and it fits perfectly into my routine. — @yrrudyk

</p></div>

        </div>
      </div>
    </section>
  );
};

export default JoinBrandSection;
