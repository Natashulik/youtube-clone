import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import SliderEditBlock from './SliderEditBlock';
import { setIsModalEditOpen, editItem, setQuantityForEditRequest } from '../redux/favoriteSlice';
import { useForm } from 'react-hook-form';

function ModalEdit() {
  const text = useSelector(state => state.input.text);
  const {selectedItem, quantityForEditRequest} = useSelector(state => state.favorite);
  const id = selectedItem.id;
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      request: selectedItem ? selectedItem.request : '',
      name: selectedItem ? selectedItem.name : '',
      sortType: selectedItem ? selectedItem.sortType : '',
      quantity: quantityForEditRequest
    }
  });

  const onSubmit = (data) => {
     dispatch(editItem({
      id, data: {
        request: data.request,
        name: data.name,
        sortType: data.sortType,
        quantity: quantityForEditRequest
      }
    }));
    dispatch(setIsModalEditOpen(false));
  
  }

  const handleCloseModalEdit = () => {
    dispatch(setIsModalEditOpen(false));
  };


  return <>
    <form className='modal_edit_container' onSubmit={handleSubmit(onSubmit)}>
      <h3 className='modal_title'> Сохранить запрос</h3>
      <div className="request_block">
        <label htmlFor="request" className='block_title'>Запрос</label>
        <input className='block_input' placeholder={text} name='request' {...register('request')}  />
      </div>
      <div className="name_block">
        <label htmlFor="name" className='block_title'><span className='span_title'>*</span>Название</label>
        <input className='block_input' placeholder='укажите название' name='name' {...register('name', {required: true})}   />
      </div>
      <div className="sort_block">
        <label htmlFor="sortType" className='block_title'>Сортировать по</label>
        <select className='block_input select' name='sortType' {...register('sortType')}  >
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
          <SliderEditBlock  />
    {/*      <input type="hidden" name="quantity"  {...register('quantity')}  />*/}
      </div>
      <div className='button_block'>
        <button className='modal_button not_save' onClick={handleCloseModalEdit}>Не сохранять</button>
        <button className='modal_button save' type='submit'>Сохранить</button>
      </div>
    </form>
  </>
}

export default ModalEdit;


/*
function ModalEdit() {
  const text = useSelector(state => state.input.text);
  const {selectedItem, quantityForEditRequest} = useSelector(state => state.favorite);
  const id = selectedItem.id;
  const dispatch = useDispatch();

  const handleSaveRequest = (event) => {
    event.preventDefault();
    dispatch(editItem({
      id, data: {
      request: event.target.elements.request.value,
      name: event.target.elements.name.value,
      sortType: event.target.elements.sortType.value,
      quantity: quantityForEditRequest
      }
    })); }

  return <form className='modal_edit_container' onSubmit={handleSaveRequest}>
      <label htmlFor="request">Запрос</label>
      <input  placeholder={text} name='request' defaultValue={selectedItem ? selectedItem.request : ''} />
      <label htmlFor="name" >Название</label>
      <input placeholder='укажите название' name='name'defaultValue={selectedItem ? selectedItem.name : ''} />
      <label htmlFor="sortType" >Сортировать по</label>
      <select name='sortType' defaultValue={selectedItem ? selectedItem.sortType : ''}>
          <option className='selected_option'> без сортировки </option>
          <option value="рейтингу"> рейтингу </option>
      </select>
      <label htmlFor='quantity'>Максимальное количество</label>
          <SliderEditBlock name='quantity' />
          <input type="hidden" name="quantity" />
       <button className='modal_button save' type='submit'>Сохранить</button>
     </form>
}

export default ModalEdit;*/

