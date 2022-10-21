import { createSlice } from "@reduxjs/toolkit";


const ImagesSlice = createSlice({
  name: "ImgsStore",
  initialState: {
   
    ImgesList: [{w:"Hi" ,hover:false},{w:"bye",hover:false},{w:"hello",hover:false},{w:"how are you",hover:false}],
  
  },


  reducers: {
    images: (state,action) => {
      state.ImgesList = [...state.ImgesList, action.payload];
     
    },

  
     
    

  },
});

export const {  images } = ImagesSlice.actions;
export const selectImgesList = (state) => state.ImgsStore.ImgesList;


export default ImagesSlice.reducer;
