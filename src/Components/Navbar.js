import React from 'react'

function Navbar() {
  return (
    <div>
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
  );
}

export default Navbar
