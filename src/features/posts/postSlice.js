const { createSlice } = require("@reduxjs/toolkit");



const postSlice = createSlice({
    name: 'post',
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) => {

    }
});