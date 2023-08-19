import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';

function Search() {
  return <div>
    <Header />
    <div className='search_body'>
      <div className='search_container'>
        <h1 className='search_title'>Поиск видео</h1>
        <Input />
      </div>

    </div>
  </div>
}

export default Search;