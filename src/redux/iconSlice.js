import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedIcon: 'list'
}

export const iconSlice = createSlice({
  name: "icon",
  initialState,
  reducers: {
    setSelectedIcon: (state, action) => {
      state.selectedIcon = action.payload;
    }
  }
})

export const { setSelectedIcon, setVideos } = iconSlice.actions;
export default iconSlice.reducer;