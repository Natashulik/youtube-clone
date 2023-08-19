import { createSlice } from "@reduxjs/toolkit";
import { loadFavorites } from '../helpers/localStorage';

const initialState = {
  favoriteItems: loadFavorites(),
  quantityForNewRequest: 12,
  quantityForEditRequest: 0,
  selectedItem: null,
  isModalEditOpen: false,

}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setNewItems: (state, action) => {
      state.favoriteItems.push(action.payload)
    },
    deleteItem: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(item => item.id !== action.payload)
    },
    setQuantityForNewRequest: (state, action) => {
      state.quantityForNewRequest = action.payload;
    },
    setQuantityForEditRequest: (state, action) => {
      state.quantityForEditRequest = action.payload;
    },
    editItem: (state, action) => {
      const { id, data } = action.payload;
      state.favoriteItems = state.favoriteItems.map(item => item.id === id ? { ...item, ...data } : item)
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setIsModalEditOpen: (state, action) => {
      state.isModalEditOpen = action.payload;
    },
    setFavorites: (state, action) => {
      state.favoriteItems = action.payload;
    }
  }
})
export const { setNewItems, deleteItem, setQuantityForNewRequest, setQuantityForEditRequest, editItem, setSelectedItem, setIsModalEditOpen, setFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;

