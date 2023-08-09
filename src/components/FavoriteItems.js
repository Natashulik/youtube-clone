import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteItem,  setSelectedItem, setIsModalEditOpen, setFavorites, setQuantityForEditRequest } from '../redux/favoriteSlice';
import { setVideos, setInputText, setNextPageToken } from '../redux/inputSlice';
import ModalEdit from './ModalEdit';
import { fetchVideos } from '../helpers/fethVideos';
import { useNavigate } from "react-router-dom";
import { loadFavorites, saveFavorites} from '../helpers/localStorage';

function FavoriteItems() {
   const favoriteItems = useSelector(state => state.favorite.favoriteItems);
    const isModalEditOpen = useSelector(state => state.favorite.isModalEditOpen);
    const pageToken = useSelector(state => state.input.nextPageToken);
    const user = useSelector(state => state.login.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
   useEffect(() => {
      const savedFavorites = loadFavorites(); 
      dispatch(setFavorites(savedFavorites));
        }, []);

  useEffect(() => {
      saveFavorites(favoriteItems); 
    }, [favoriteItems]);
  
    const handleDeleteItem = id => {
      dispatch(deleteItem(id));
    };

    const handleEditItem = item => {
       dispatch(setQuantityForEditRequest(item.quantity))
       dispatch(setIsModalEditOpen(true));
      dispatch(setSelectedItem(item));
     
      };

    const handleFetchItem = async(item) => {
      dispatch( setInputText(item.request));
      navigate("/result");
     let sortType;
      switch(item.sortType) {
        case 'без сортировки': sortType='relevance';
        break;
        case 'дате создания': sortType='date';
        break;
        case 'рейтингу': sortType='rating';
        break;
        case 'релевантности': sortType='relevance';
        break;
        case 'алфавиту': sortType='title';
        break;
        case 'количеству просмотров': sortType='viewCount';
        break;
      }
       const res =  await fetchVideos(item.request, item.quantity, sortType, pageToken);
       dispatch(setVideos(res.items));
      dispatch(setNextPageToken(res.nextPageToken))
      dispatch(setInputText(item.request))
    }
  
   const filteredFavorites = favoriteItems.filter(item => item.user === user)

 return ( <div>
     { filteredFavorites.map(item =>  <div className='favorite_item' key={item.id}> 
         <p className='favorite_item_title'>{item.name} </p>
        <button className="button-make" onClick={() => handleFetchItem(item)}> ✔  </button>
        <button className="button-edit" onClick={() => handleEditItem(item)}> ✎  </button>
        <button className="button-delete" onClick={() => handleDeleteItem(item.id)}> ✖ </button>
      </div>) }
      {isModalEditOpen && <ModalEdit />}
    
    </div> )
}

export default FavoriteItems;
