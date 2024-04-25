import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SliderBlock from "./SliderBlock";
import { setIsModalOpen } from "../redux/inputSlice";
import { setNewItems, setQuantityForNewRequest } from "../redux/favoriteSlice";
import { saveFavorites } from "../helpers/localStorage";
import { setIsModalSaveOpen } from "../redux/inputSlice";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

function Modal() {
  const text = useSelector((state) => state.input.text);
  const { favoriteItems, quantityForNewRequest } = useSelector(
    (state) => state.favorite
  );
  const user = useSelector((state) => state.login.email);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const blockInputName = document.querySelector(".block_input_name");

    if (data.name.length === 0) {
      blockInputName.classList.add("invalid_input");
    } else {
      const newRequest = {
        id: uuidv4(),
        request: text,
        name: data.name,
        sortType: data.sortType,
        quantity: quantityForNewRequest,
        user: user,
      };

      console.log(newRequest);

      dispatch(setNewItems(newRequest));
      saveFavorites([...favoriteItems, newRequest]);

      dispatch(setIsModalOpen(false));
      dispatch(setQuantityForNewRequest(12));
      dispatch(setIsModalSaveOpen(true));
      setTimeout(() => dispatch(setIsModalSaveOpen(false)), 2500);
    }
  };

  const handleCloseModal = () => {
    dispatch(setIsModalOpen(false));
  };

  return (
    <>
      <form className="modal_container" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="modal_title"> Сохранить запрос</h3>
        <div className="request_block">
          <label htmlFor="request" className="block_title">
            Запрос
          </label>
          <input
            className="block_input"
            placeholder={text}
            name="request"
            {...register("request")}
          />
        </div>
        <div className="name_block">
          <label htmlFor="name" className="block_title">
            <span className="span_title">*</span>Название
          </label>
          <input
            className="block_input  block_input_name"
            placeholder="укажите название"
            name="name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="sort_block">
          <label htmlFor="sortType" className="block_title">
            Сортировать по
          </label>
          <select
            className="block_input select"
            name="sortType"
            {...register("sortType")}
          >
            <option className="selected_option"> без сортировки </option>
            <option> дате создания </option>
            <option> рейтингу </option>
            <option> релевантности </option>
            <option> алфавиту </option>
            <option> количеству просмотров </option>
          </select>
        </div>
        <div className="max_request_block">
          <label className="block_title">Максимальное количество</label>
          <SliderBlock />
        </div>
        <div className="button_block">
          <button className="modal_button not_save" onClick={handleCloseModal}>
            Не сохранять
          </button>
          <button className="modal_button save" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </>
  );
}

export default Modal;
