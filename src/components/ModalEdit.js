import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import SliderEditBlock from './SliderEditBlock';
import { setIsModalEditOpen, editItem } from '../redux/favoriteSlice';
import { setNewItems, setQuantityForNewRequest, setQuantityForEditRequest } from '../redux/favoriteSlice';

function ModalEdit() {
    const text = useSelector(state => state.input.text);
    const selectedItem = useSelector(state => state.favorite.selectedItem);
    const id = selectedItem.id;
    const quantityForEditRequest =  useSelector(state => state.favorite.quantityForEditRequest);
   const dispatch = useDispatch();
   
  
    const handleCloseModalEdit= () => {
        dispatch(setIsModalEditOpen(false));
      };

    const handleSaveRequest = (event) => { 
        event.preventDefault();
        dispatch(editItem({id, data: { 
            request: event.target.elements.request.value, 
            name: event.target.elements.name.value, 
            sortType: event.target.elements.sortType.value,
            quantity: quantityForEditRequest
    }}));
           dispatch(setIsModalEditOpen(false));
     
    }

       return <>
     <form className='modal_edit_container' onSubmit={handleSaveRequest}> 
    <h3 className='modal_title'> Сохранить запрос</h3>
    <div className="request_block">
        <label htmlFor="request" className='block_title'>Запрос</label>
        <input className='block_input'  placeholder={text} name='request'
         defaultValue={selectedItem ? selectedItem.request : ''} />
    </div>
    <div className="name_block">
        <label htmlFor="name" className='block_title'><span className='span_title'>*</span>Название</label>
        <input className='block_input' placeholder='укажите название' name='name'
         defaultValue={selectedItem ? selectedItem.name : ''} />
    </div>
    <div className="sort_block">
        <label htmlFor="sortType" className='block_title'>Сортировать по</label>
        <select className='block_input select' name='sortType' 
        defaultValue={selectedItem ? selectedItem.sortType : ''}>
            <option className='selected_option'> без сортировки </option> 
            <option value="дате создания"> дате создания </option> 
            <option value="рейтингу"> рейтингу </option> 
            <option value="релевантности"> релевантности </option> 
            <option value="алфавиту"> алфавиту </option> 
            <option value="количеству просмотров"> количеству просмотров </option> 
</select>
    </div>
    <div className="max_request_block"> 
        <label className='block_title' htmlFor='quantity'>Максимальное количество</label>
        <SliderEditBlock name='quantity'  /> 
        <input type="hidden" name="quantity" />    
    </div>
    <div className='button_block'>
        <button className='modal_button not_save' onClick={handleCloseModalEdit}>Не сохранять</button>
        <button className='modal_button save' type='submit'>Сохранить</button>
    </div>
   </form>
    </>
}

export default ModalEdit;

