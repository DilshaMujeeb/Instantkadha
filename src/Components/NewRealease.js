import React from 'react'
import Iza from "../Assets/images/IZAPIC.png";
import Luka from "../Assets/images/lukaPic.png";
import Nola from "../Assets/images/nolapic.png";

function NewRealease() {
  return (
    <div>
      <div className="overlap-4">
        <div className="div-2">
          <div className="text-wrapper-12">New releases</div>
          <a href="iza.html">
            <img className="rectangle" src={Iza} />
          </a>
          <a href="luka.html">
            <img className="img" src={Luka} />
          </a>
          <a href="nola.html">
            <img className="rectangle-3" src={Nola} />
          </a>
          <div className="text-wrapper-13">Iza</div>
          <div className="text-wrapper-18">Luka</div>
          <div className="text-wrapper-19">Nola</div>
        </div>
        {/* <div className="text-wrapper-20">130x154</div>
                  <div className="text-wrapper-21">130x154</div>
                  <div className="text-wrapper-22">130x154</div> */}
      </div>
    </div>
  );
}

export default NewRealease