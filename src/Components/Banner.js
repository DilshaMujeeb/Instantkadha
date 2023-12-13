import React from "react";

function Banner({ videoUrl }) {
  console.log(videoUrl);

  return (
    <div>
      <div className="overlap">
        {videoUrl ? (
          <div className="video-container">
            <div className="frame">
              {/* Embed the video player with the provided URL */}
              <video width="100%" height="100%" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : (
          <>
            <div className="frame"></div>
            <div className="action-buttons">
              <div className="play">
                <div className="overlap-group">
                  <div className="text-wrapper-4">Favourite</div>
                </div>
              </div>
              <div className="favourite">
                <div className="div-wrapper">
                  <div className="text-wrapper-5">Trending</div>
                </div>
              </div>
              <div className="info">
                <div className="overlap-2">
                  <a href="subscription.html">
                    <div className="text-wrapper-6">Price</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-wrapper-7" id="hello">
              Hey Kid!
            </div>
            <img
              className="search"
              src="https://c.animaapp.com/FRCNyZYZ/img/search.png"
            />
            <img
              className="profile-pic"
              src="https://c.animaapp.com/FRCNyZYZ/img/profile-pic.png"
            />
            <img
              className="filter"
              src="https://c.animaapp.com/FRCNyZYZ/img/filter.png"
            />
            <div className="categories">
              <a href="#">
                {" "}
                <div className="text-wrapper-8">Podcast</div>
              </a>
              <a href="#">
                <div className="text-wrapper-9">Audio Comics</div>
              </a>
              <a href="#">
                {" "}
                <div className="text-wrapper-91">Comics</div>
              </a>
            </div>
            <div className="text-wrapper-11">35x37</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Banner;
