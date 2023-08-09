import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect} from 'react';
import ViewsCount from './ViewsCount';

const VideoItem = ({ video }) => {
  const { title, description, thumbnails } = video.snippet;
  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

return  <>
<a  href={videoUrl} target="_blank" rel="noopener noreferrer" className="video_item">
    <img src={thumbnails.default.url} alt={title}  className='video_image'/>
    <div className="video_item_details">
        <h3  className='item_title'>{title}</h3>
        <p className='item_description'>{description}</p>
    <ViewsCount videoId={videoId}/>     
    </div>
 </a>
 </>};

export default VideoItem; 
