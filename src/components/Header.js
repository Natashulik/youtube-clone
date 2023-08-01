import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <div className='header_wrapper'> 
    <div className='nav'>
    <img src="images/sibdev-logo.svg" alt="logo" className='header_logo' />
    <Link to="/search" className='nav_item'>Поиск</Link>
    <Link to="/favorites" className='nav_item'>Избранное</Link>
    <Link  to="/login" className='nav_item'>Выйти</Link>

    </div>
    </div>
}

export default Header;




       
       


