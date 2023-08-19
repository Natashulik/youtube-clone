import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { fetchViewsCount } from '../helpers/fetchViewsCount';
import { setVideoViews, setVideoLoading } from '../redux/inputSlice';
import { formatViews } from '../helpers/formatViews';

const ViewsCount = ({ videoId }) => {
  const dispatch = useDispatch();
  const views = useSelector(state => state.input.videos.find(item => item.id.videoId === videoId)?.views);
  const isLoading = useSelector(state => state.input.videos.find(item => item.id.videoId === videoId)?.isLoading);
  
  const fetchData = async () => {
    const res = await fetchViewsCount(videoId);
    dispatch(setVideoViews({ videoId, views: res }));
    dispatch(setVideoLoading({ videoId, isLoading: true }));
    if (views) { dispatch(setVideoLoading({ videoId, isLoading: false })); }
  } 

  useEffect(() => {
       fetchData();
  }, [views])

  return <div>
    {isLoading ? <Spin indicator={(<LoadingOutlined style={{ fontSize: 24, }} spin />)} />
      : <p className='view_count'>{formatViews(views)}</p>}
  </div>
};

export default ViewsCount;


 
