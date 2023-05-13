import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profiles/trainings/", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <h2>{video.email}</h2>
            <ReactPlayer
              url={video.video}
              width={640}
              height={360}
              playing={true}
              controls={true}
            />
            <p>{video.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
