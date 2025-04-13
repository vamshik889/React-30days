import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import productSlice from "./productSlice"
const store_3 = configureStore({
    reducer:{
        cart:cartSlice,
        products:productSlice
    }
})

export default store_3;