import React from 'react';
import Header from '../components/Header';
import Input from '../components/Input';
import FilterPanel from '../components/FilterPanel';
import VideosContainer from '../components/VideosContainer';


function Result() {
  return <div>
    <Header />
    <div className='search_body'>
      <div className='result_container'>
        <h2 className='search_title result'>Поиск видео</h2>
        <Input />
        < FilterPanel />
        <VideosContainer />
      </div>

    </div>
  </div>
}

export default Result;