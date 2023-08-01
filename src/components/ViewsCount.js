import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "antd";
import { fetchViewsCount } from '../helpers/fetchViewsCount';
import { setVideoViews, setVideoLoading } from '../redux/inputSlice';

const ViewsCount = (videoId) => {
  const dispatch = useDispatch();
  const { views, isLoading } = useSelector(state => state.input.videos.find(item => item.id.videoId === videoId));
 
   useEffect(() => {
    async function fetchData() {
      const res = await dispatch(fetchViewsCount(videoId));
      console.log(res)
      dispatch(setVideoViews({ videoId, views: res }));
      dispatch(setVideoLoading({ videoId, isLoading: true }));
    }
    fetchData();
       }, []);

    return   <div>
      {isLoading ? <Skeleton /> : <p className='view_count'>{views} тыс. просмотров</p>}
    </div>
};

export default ViewsCount;

