import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: '',
  email: '',
  password: '',
  age: '',
  gender: '',
  isError: false
}

export const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
  }
})
export const { setUsername, setEmail, setPassword, setAge, setGender, setIsError } = registrationSlice.actions;
export default registrationSlice.reducer;