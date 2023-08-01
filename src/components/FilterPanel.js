import React from 'react';
import { useSelector, useDispatch} from "react-redux";
import {setSelectedIcon} from '../redux/iconSlice';

function FilterPanel() {
    const text = useSelector(state => state.input.text);
    let selectedIcon = useSelector(state => state.icon.selectedIcon);
    const dispatch = useDispatch();

    let videos_container = document.querySelector('.videos_container');
     
    const handleList =() => {
    dispatch(setSelectedIcon('list'));

        if(videos_container.classList.contains('grid_mode')) {
            videos_container.classList.remove('grid_mode');     }
    
        if (!videos_container.classList.contains('list_mode')) {
            videos_container.classList.add('list_mode');
        }
    }

    const handleGrid =() => {
      dispatch(setSelectedIcon('grid'));

        if(videos_container.classList.contains('list_mode')) {
            videos_container.classList.remove('list_mode');     }

        if (!videos_container.classList.contains('grid_mode')) {
            videos_container.classList.add('grid_mode');    }
        }

    return <div className='filter_panel_container'>
        <div className='filter_title_wrapper'>
            <h3 className='filter_title'>Видео по запросу "{text}"</h3>
            <h3 className='filter_number_cards'>2456</h3>
        </div>
        <div className='view_switcher'>
            <img onClick={handleList} src={selectedIcon==="list"? "images/list-active.svg" : "images/list.svg"} alt="list_image" className='list_image' />
            <img onClick={handleGrid} src={selectedIcon==="grid"? "images/grid-active.svg" : "images/grid.svg"} alt='grid_image' className='grid_image' />
        </div>
    </div>
}

export default FilterPanel;