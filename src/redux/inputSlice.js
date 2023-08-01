import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: '',
    videos: [],
    isModalOpen: false
 }

export const inputSlice = createSlice ({
    name: "input", 
    initialState,
    reducers: {
        setInputText: (state, action) => {
            state.text = action.payload;
        },
        setVideos:  (state, action) => {
            state.videos = action.payload;
        },
        setIsModalOpen:  (state, action) => {
            state.isModalOpen = action.payload;
        },
        setVideoViews: (state, action) => {
            const { videoId, views } = action.payload;
            state.videos = state.videos.map(item => item.id.videoId !== action.payload.videoId ? item : 
                { ...item, views: action.payload.views})
        },
        setVideoLoading: (state, action) => {
            const { videoId, isLoading } = action.payload;
            state.videos = state.videos.map(item => item.id.videoId !== action.payload.videoId ? item : 
                { ...item, isLoading: action.payload.isLoading})
        }
    }
})

export const {setInputText, setVideos, setIsModalOpen,  setVideoViews, setVideoLoading  } = inputSlice.actions;

export default inputSlice.reducer;

