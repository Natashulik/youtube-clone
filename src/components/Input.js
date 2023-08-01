import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setInputText, setVideos, setIsModalOpen } from '../redux/inputSlice';
import { Link } from 'react-router-dom';
import { fetchVideos } from '../helpers/fethVideos';
import Modal from './Modal';

function Input(){
  const text = useSelector(state => state.input.text);
  const isModalOpen = useSelector(state => state.input.isModalOpen);
  const videos = useSelector(state => state.input.videos);
   const dispatch = useDispatch();

function onChange(event) {
    dispatch(setInputText(event.target.value))
    }

  const handleClick = async () => {
   const res =  await fetchVideos(text);
      dispatch(setVideos(res));
     }

  const handleFavoritesClick = () => {
   dispatch(setIsModalOpen(true));
  }

    return <>
     <div className='input_container'>
       <input className='search_input' placeholder='Что хотите посмотреть?'
            value={text} onChange={onChange}/>
       <img  src="images/heart.svg" alt="heart_image" className='favorites_icon'  onClick={handleFavoritesClick}/>
       <Link to="/result" ><button className='button_find' onClick={handleClick}>Найти</button></Link>
      </div>
        {isModalOpen && <Modal />}
        </>
}

export default Input;