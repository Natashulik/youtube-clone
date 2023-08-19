import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from 'react';
import VideoItem from './VideoItem';
import { addVideos, setIsLoading } from '../redux/inputSlice';
import { fetchVideos } from '../helpers/fetchVideos';


function VideosContainer() {
  const {videos, text, pageToken, sortType, isLoading} = useSelector(state => state.input);
  const quantity = useSelector(state => state.favorite.quantityForNewRequest);
  const selectedIcon = useSelector(state => state.icon.selectedIcon);
  const loaderRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = async () => {
    if (!isLoading && loaderRef.current && loaderRef.current.getBoundingClientRect().top <= window.innerHeight) {
      dispatch(setIsLoading(true));
      console.log(isLoading)     //все равно выводит false, так как dispatch(setIsLoading(true)) занимает определенное время
      const res = await fetchVideos(text, quantity, sortType, pageToken); 
      dispatch(addVideos(res.items));
      console.log(res.items)
      if (isLoading) {
        dispatch(setIsLoading(false));
      }
    }
  }

  return <>
    <div className={selectedIcon==='list'? 'videos_container list_mode' : 'videos_container grid_mode'}>
      {videos.map((video, index) => (
        <VideoItem key={`video_${index}`} video={video} />
      ))}

    </div>
    <div ref={loaderRef}>Загрузка ...</div>
  </>
}

export default VideosContainer;
