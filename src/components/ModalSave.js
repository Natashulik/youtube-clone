import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

function ModalSave() {
    return <div className='modal_save_container'>
        <p className='modal_save_title'>Поиск сохранён в разделе «Избранное»</p>
        <Link className='modal_save_link' to="/favorites">Перейти в избранное</Link>
    </div>
}

export default ModalSave;