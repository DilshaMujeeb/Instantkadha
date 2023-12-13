import './App.css';

// Podcast.js
import React from 'react';

const App = () => {
  return (
    <div>
      <section className="login">
        <div className="home">
          <div className="div">
            <div className="overlap">
              <div className="frame"></div>
              {/* ... rest of your HTML ... */}
              {/* <div className="genre"> */}
                {/* <div className="text-wrapper">Romance</div>
                    <div className="text-wrapper-2">Horror</div>
                    <div className="text-wrapper-3">Fantasy</div> */}
              {/* </div> */}
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
                  {' '}
                  <div className="text-wrapper-8">Podcast</div>
                </a>
                <a href="#">
                  <div className="text-wrapper-9">Audio Comics</div>
                </a>
                <a href="#">
                  {' '}
                  <div className="text-wrapper-91">Comics</div>
                </a>
              </div>

              <div className="text-wrapper-11">35x37</div>
            </div>
            <div className="overlap-3">
              <div className="div-2">
                <div className="text-wrapper-12">Most popular</div>
                <a href="elio.html">
                  <img className="rectangle" src="images/ELIOPIC.png" />
                </a>
                <a href="esla.html">
                  <img className="img" src="images/ESLAPIC.png" />
                </a>
                <a href="ivory.html">
                  <img className="rectangle-2" src="images/ivoryPic.png" />
                </a>
                <div className="text-wrapper-13">Elio</div>
                <div className="text-wrapper-14">Elsa</div>
                <div className="the-tortoise-hare">Ivory</div>
              </div>
              {/* <div className="text-wrapper-15">130x154</div>
                  <div className="text-wrapper-16">130x154</div>
                  <div className="text-wrapper-17">130x154</div> */}
            </div>
            <div className="overlap-4">
              <div className="div-2">
                <div className="text-wrapper-12">New releases</div>
                <a href="iza.html">
                  <img className="rectangle" src="images/IZAPIC.png" />
                </a>
                <a href="luka.html">
                  <img className="img" src="images/lukaPic.png" />
                </a>
                <a href="nola.html">
                  <img className="rectangle-3" src="images/nolapic.png" />
                </a>
                <div className="text-wrapper-13">Iza</div>
                <div className="text-wrapper-18">Luka</div>
                <div className="text-wrapper-19">Nola</div>
              </div>
              {/* <div className="text-wrapper-20">130x154</div>
                  <div className="text-wrapper-21">130x154</div>
                  <div className="text-wrapper-22">130x154</div> */}
            </div>
            <div className="overlap-5">
              <div className="continue-playing">
                <div className="text-wrapper-23">Continue playing</div>
                <div className="overlap-6">
                  <a href="nyla.html">
                    <img className="rectangle-5" src="images/nylaPic.png" />
                  </a>
                </div>
                <div className="overlap-7">
                  <a href="olive.html">
                    <img className="rectangle-5" src="images/OLIVEPIC.png" />
                  </a>
                </div>
                <div className="overlap-8">
                  <a href="turqo.html">
                    <img className="rectangle-7" src="images/turqopic.png" />
                  </a>
                </div>
                <div className="text-wrapper-24">Nyla</div>
                <div className="text-wrapper-25">Olive</div>
                <div className="text-wrapper-26">Turqo</div>
              </div>
            </div>
            <div className="nav-menu">
              <div className="group-wrapper">
                <div className="group">
                  <a href="profile.html">
                    <img
                      className="paper"
                      src="https://c.animaapp.com/FRCNyZYZ/img/paper.png"
                    />
                  </a>

                  <img
                    className="img-2"
                    src="https://c.animaapp.com/FRCNyZYZ/img/home.png"
                  />
                  <a href="discover.html">
                    <img
                      className="discovery"
                      src="https://c.animaapp.com/FRCNyZYZ/img/discovery.png"
                    />
                  </a>
                  <a href="Account.html">
                    <img
                      className="category"
                      src="https://c.animaapp.com/FRCNyZYZ/img/category.png"
                    />
                  </a>
                  <div className="text-wrapper-29">Home</div>
                  <div className="text-wrapper-30">Discover</div>
                  <div className="text-wrapper-31">Library</div>
                  <div className="text-wrapper-32">Menu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};



export default App;