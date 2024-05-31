import { configureStore } from "@reduxjs/toolkit";
import MyProduct from "../screen/MyProduct";
import MyProductSlice from "./MyProductSlice";
import MyCartSlice from "./MyCartSlice";

export const Store=configureStore({
    reducer:{
        products:MyProductSlice,
        cart:MyCartSlice  
    }
})