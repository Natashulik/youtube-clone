import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { useSelector, useDispatch } from "react-redux";
import {setEmail, setPassword, setIsError} from '../redux/loginSlice';
import { saveFavorites } from '../helpers/localStorage';


function Header() {
  const dispatch = useDispatch();

const handleClearData = () => {
      dispatch(setEmail(''));
      dispatch(setPassword(''));
    dispatch(setIsError(false));
}
    return <div className='header_wrapper'> 
    <div className='nav'>
    <img src={logo} alt="logo" className='header_logo' />
    <Link to="/search" className='nav_item'>Поиск</Link>
    <Link to="/favorites" className='nav_item'>Избранное</Link>
    <Link  to="/youtube-clone" className='nav_item' onClick={handleClearData}>Выйти</Link>

    </div>
    </div>
}

export default Header;




       
       


