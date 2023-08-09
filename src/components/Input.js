import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setInputText, setVideos, setIsModalOpen, setTotalResults, setNextPageToken} from '../redux/inputSlice';
import { Link } from 'react-router-dom';
import { fetchVideos } from '../helpers/fethVideos';
import Modal from './Modal';
import ModalSave from './ModalSave';
import heart from '../images/heart.svg'
import heart_active from  '../images/heart_active.svg'
import { useNavigate } from "react-router-dom";

function Input(){
  const text = useSelector(state => state.input.text);
  const isModalOpen = useSelector(state => state.input.isModalOpen);
  const isModalSaveOpen = useSelector(state => state.input.isModalSaveOpen);
  const quantity = useSelector(state => state.favorite.quantityForNewRequest);
  const sortType = useSelector(state => state.input.sortType);
  const pageToken = useSelector(state => state.input.nextPageToken);
  const dispatch = useDispatch();

  const navigate = useNavigate();

function onChange(event) {
    dispatch(setInputText(event.target.value))
    }

  const handleClick = async () => {
     const res =  await fetchVideos(text, quantity, sortType, pageToken );
     dispatch(setVideos(res.items));
      dispatch(setTotalResults(res.pageInfo.totalResults))
      dispatch(setNextPageToken(res.nextPageToken))
        }

  const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        navigate("/result");
        handleClick();   
       
    } }

  const handleFavoritesClick = () => {
   dispatch(setIsModalOpen(true));
  }

    return <>
     <div className='input_container'>
       <input className='search_input' placeholder='Что хотите посмотреть?'
            value={text} onChange={onChange} onKeyDown={handleKeyDown} />
       <img  src={isModalSaveOpen? heart_active: heart} alt="heart_image" className='favorites_icon'  onClick={handleFavoritesClick}/>
       <Link to="/result" ><button className='button_find' onClick={handleClick}>Найти</button></Link>
      </div>
        {isModalOpen && <Modal />}
        {isModalSaveOpen && <ModalSave />}
        </>
}

export default Input;

