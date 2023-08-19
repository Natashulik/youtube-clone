import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: '',
  videos: [],
  isModalOpen: false,
  isModalSaveOpen: false,
  sortType: "relevance",
  totalResults: 0,
  nextPageToken: null,
  isLoading: false //загружается ли доп.видео при скролле
}

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputText: (state, action) => {
      state.text = action.payload;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setIsModalSaveOpen: (state, action) => {
      state.isModalSaveOpen = action.payload;
    },
    setVideoViews: (state, action) => {
      state.videos = state.videos.map(item => item.id.videoId !== action.payload.videoId ? item :
            { ...item, views: action.payload.views })
    },
    setVideoLoading: (state, action) => {
      state.videos = state.videos.map(item => item.id.videoId !== action.payload.videoId ? item :
            { ...item, isLoading: action.payload.isLoading })
    },
    setTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },
    setNextPageToken: (state, action) => {
      state.nextPageToken = action.payload;
    },
    addVideos: (state, action) => {
      state.videos = [...state.videos, ...action.payload];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  }
})

export const { setInputText, setVideos, setIsModalOpen, setIsModalSaveOpen, setVideoViews, setVideoLoading, addVideos, setTotalResults, setNextPageToken, setIsLoading } = inputSlice.actions;
export default inputSlice.reducer;

