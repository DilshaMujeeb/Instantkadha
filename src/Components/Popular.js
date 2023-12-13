import React from 'react'

import Elio from "../Assets/images/ELIOPIC.png";
import Elsa from "../Assets/images/nolapic.png";
import Ivory from "../Assets/images/ivoryPic.png";
import ElioVideo from "../Assets/videos/NOLA.mp4";
import ElsaVideo from "../Assets/videos/NOLA.mp4";
import IvoryVideo from "../Assets/videos/NOLA.mp4";
function Popular({ onVideoClick }) {
  console.log(onVideoClick,".............");
    const handleImageClick = (videoPath) => {
        console.log(videoPath);
      onVideoClick(videoPath);
    };
  return (
    <div>
      <div className="overlap-3">
        <div className="div-2">
          <div className="text-wrapper-12">Most popular</div>
          <img
            className="rectangle"
            src={Elio}
            alt="elio"
            onClick={() => {
              handleImageClick(ElioVideo);
            }}
          />
          <img
            className="img"
            src={Elsa}
            alt="elsa"
            onClick={() => {
              handleImageClick(ElsaVideo);
            }}
          />
          <img
            className="rectangle-2"
            src={Ivory}
            alt="ivory"
            onClick={() => {
              handleImageClick(IvoryVideo);
            }}
          />
          <div className="text-wrapper-13">Elio</div>
          <div className="text-wrapper-14">Elsa</div>
          <div className="the-tortoise-hare">Ivory</div>
        </div>
        {/* <div className="text-wrapper-15">130x154</div>
                  <div className="text-wrapper-16">130x154</div>
                  <div className="text-wrapper-17">130x154</div> */}
      </div>
    </div>
  );
}


export default Popular;