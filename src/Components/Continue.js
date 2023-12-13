import React from 'react'
import Nyla from "../Assets/images/nylaPic.png";
import Olive from "../Assets/images/OLIVEPIC.png";
import Turqo from "../Assets/images/turqopic.png";

function Continue() {
  return (
    <div>
      <div className="overlap-5">
        <div className="continue-playing">
          <div className="text-wrapper-23">Continue playing</div>
          <div className="overlap-6">
            <a href="nyla.html">
              <img className="rectangle-5" src={Nyla} />
            </a>
          </div>
          <div className="overlap-7">
            <a href="olive.html">
              <img className="rectangle-5" src={Olive} />
            </a>
          </div>
          <div className="overlap-8">
            <a href="turqo.html">
              <img className="rectangle-7" src={Turqo} />
            </a>
          </div>
          <div className="text-wrapper-24">Nyla</div>
          <div className="text-wrapper-25">Olive</div>
          <div className="text-wrapper-26">Turqo</div>
        </div>
      </div>
    </div>
  );
}

export default Continue