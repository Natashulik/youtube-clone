import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  password: '',
  isError: false
}

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  }
})

export const { setEmail, setPassword, setIsError } = loginSlice.actions;
export default loginSlice.reducer;