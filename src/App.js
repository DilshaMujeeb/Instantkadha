import React, { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Popular from "./Components/Popular";
import NewRealease from "./Components/NewRealease";
import Continue from "./Components/Continue";
import Navbar from "./Components/Navbar";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoChange = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <div>
      <section className="login">
        <div className="home">
          <div className="div">
            <Banner videoUrl={selectedVideo} />
            <Popular onVideoClick={handleVideoChange} />
            <NewRealease />
            <Continue />
            <Navbar />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
