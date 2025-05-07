import React from 'react';
import './Home.css';

function Home() {
  return (
    <div id="home" className="home active">
      {/* Background Video */}
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="/archicastvid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}


export default Home;
