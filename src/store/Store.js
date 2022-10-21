import { configureStore } from "@reduxjs/toolkit";
import  ImagesReducer from "./reducer";
export default configureStore({
    reducer: {
        ImgsStore:ImagesReducer
     
    }
   
  });