import React from 'react';
import Header from '../components/Header';
import FavoriteItems from '../components/FavoriteItems';

function Favorites() {
  return <div>
    <Header />
    <div className='favorites_body'>
      <div className='favorites_container'>
        <h2 className='favorites_title'>Избранное</h2>
        <div className='request_container'>
          <FavoriteItems />
        </div>

      </div>
    </div>
  </div>
}

export default Favorites;