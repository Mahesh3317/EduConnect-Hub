import React from 'react';
import './LiveStream.css';

function LiveStream() {
  return (
    <div className="livestream-container">
      <h1>Live Stream</h1>
      <div className="video-container">
        <video controls>
          <source src="live-stream-url" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default LiveStream;
