import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from 'react';
import VideoItem from './VideoItem';
import {addVideos, setIsLoading } from '../redux/inputSlice';
import { fetchVideos } from '../helpers/fethVideos';


function VideosContainer() {
  const videos = useSelector(state => state.input.videos);
  const text = useSelector(state => state.input.text);
  const pageToken = useSelector(state => state.input.nextPageToken);
  const quantity = useSelector(state => state.favorite.quantityForNewRequest);
  const sortType = useSelector(state => state.input.sortType);
  const isLoading = useSelector(state => state.input.isLoading);
  const loaderRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = async() => {
    if (!isLoading &&loaderRef.current && loaderRef.current.getBoundingClientRect().top <= window.innerHeight) {
      dispatch(setIsLoading(true));
       console.log(isLoading)     //все равно выводит false, так как dispatch(setIsLoading(true)) занимает определенное время
       const res =  await fetchVideos(text, quantity, sortType, pageToken ); //бесконечно делает запросы при скролле
       dispatch(addVideos(res.items)); 
       console.log(res.items)
     if(isLoading)  {
      dispatch(setIsLoading(false));
     } 
    }
  }

      return <>
      <div className='videos_container list_mode'> 
        {videos.map((video, index) => (
        <VideoItem key={`video_${index}`} video={video} />
      ))}
     
    </div> 
    <div ref={loaderRef}>Загрузка ...</div>
       </>
}

export default VideosContainer;
