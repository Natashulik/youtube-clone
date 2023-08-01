import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import SliderBlock from './SliderBlock';
import { setIsModalOpen } from '../redux/inputSlice';

function Modal() {
    const text = useSelector(state => state.input.text);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(setIsModalOpen(false));
      };

    const handleCreateRequest = () => {
        
    }
    

    return <>
     <form className='modal_container'> 
    <h3 className='modal_title'> Сохранить запрос</h3>
    <div className="request_block">
        <p className='block_title'>Запрос</p>
        <input className='block_input'  placeholder={text}/>
    </div>
    <div className="name_block">
        <p className='block_title'><span className='span_title'>*</span>Название</p>
        <input className='block_input' placeholder='укажите название'/>
    </div>
    <div className="sort_block">
        <p className='block_title'>Сортировать по</p>
      <select className='block_input select'>
        <option className='selected_option'> без сортировки </option> 
        <option> дате создания </option> 
        <option> рейтингу </option> 
        <option> релевантности </option> 
        <option> алфавиту </option> 
        <option> количеству просмотров </option> 
    </select>
    </div>
    <div className="max_request_block"> 
        <p className='block_title'>Максимальное количество</p>
        <SliderBlock/>
    </div>
    <div className='button_block'>
        <button className='modal_button not_save' onClick={handleCloseModal}>Не сохранять</button>
        <button className='modal_button save' onClick={handleCreateRequest}>Сохранить</button>
    </div>
   
    </form>
    </>
}

export default Modal;