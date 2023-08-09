import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import SliderBlock from './SliderBlock';
import { setIsModalOpen } from '../redux/inputSlice';
import { setNewItems, setQuantityForNewRequest } from '../redux/favoriteSlice';
import { setIsModalSaveOpen } from '../redux/inputSlice';
import {useRef} from 'react';

function Modal() {
    const text = useSelector(state => state.input.text);
    const favoriteItems= useSelector(state => state.favorite.favoriteItems);
    const quantityForNewRequest = useSelector(state => state.favorite.quantityForNewRequest);
    const user = useSelector(state => state.login.email);
   
    const dispatch = useDispatch();
    const formRef = useRef(null);
    
    const handleCloseModal = () => {
        dispatch(setIsModalOpen(false));
      };

    const handleCreateRequest = (event) => {
        event.preventDefault();
        const block_input_name = document.querySelector('.block_input_name');

        if(formRef.current.name.value.length===0) {
           block_input_name.classList.add('invalid_input');
        } else {
              
            const newRequest = {
                id:  Date.now(),
                request: text,
                name: formRef.current.name.value,
                sortType: formRef.current.sortType.value,
                quantity: quantityForNewRequest,
                user: user,
              };
          
            dispatch(setNewItems(newRequest));
            dispatch(setIsModalOpen(false));
            dispatch(setQuantityForNewRequest(12))
            dispatch(setIsModalSaveOpen(true));
            setTimeout(()=>dispatch(setIsModalSaveOpen(false)), 2500);
         }
      }

      const handleBlur =()=> {
        const block_input_name = document.querySelector('.block_input_name');
        block_input_name.classList.remove('invalid_input');   
      }

          
        return <>
     <form className='modal_container' ref={formRef} onSubmit={handleCreateRequest}> 
    <h3 className='modal_title'> Сохранить запрос</h3>
    <div className="request_block">
        <label htmlFor="request" className='block_title'>Запрос</label>
        <input className='block_input'  placeholder={text} name='request' />
    </div>
    <div className="name_block">
        <label htmlFor="name" className='block_title'><span className='span_title'>*</span>Название</label>
        <input className='block_input  block_input_name' placeholder='укажите название' name='name' onBlur={handleBlur}/>
    </div>
    <div className="sort_block">
        <label htmlFor="sortType" className='block_title'>Сортировать по</label>
      <select className='block_input select' name='sortType'    >
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
        <SliderBlock />
    </div>
    <div className='button_block'>
        <button className='modal_button not_save' onClick={handleCloseModal}>Не сохранять</button>
        <button className='modal_button save' type='submit'>Сохранить</button>
    </div>
   </form>
    </>
}

export default Modal;