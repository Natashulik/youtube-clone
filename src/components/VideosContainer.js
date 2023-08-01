import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import VideoItem from './VideoItem';


function VideosContainer() {
    const videos = useSelector(state => state.input.videos);
      return <div className='videos_container list_mode'> 
        {videos.map(video => (
        <VideoItem key={video.id.videoId} video={video} />
      ))}
    </div>
}

export default VideosContainer;