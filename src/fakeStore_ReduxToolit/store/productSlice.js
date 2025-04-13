import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status:"idle"
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // fetchProducts(state, action) {
      
    // },
  },
  extraReducers:(builder)=>{
    builder.addCase(getProducts.fulfilled,(state,action)=>{
        state.data = action.payload;
        state.status = "idle"
    })
    .addCase(getProducts.pending,(state,action)=>{
        state.status = "loading"
    })
    .addCase(getProducts.rejected,(state,action)=>{
        state.status = "error"
    })
  }
});

export default productSlice.reducer;

export const getProducts = createAsyncThunk('product/get',async()=>{
    const data = await axios.get("https://fakestoreapi.com/products");
    const res = data.data;
    return res
})

// export const { fetchProducts } = productSlice.actions;
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await axios.get("https://fakestoreapi.com/products");
//     const res = data.data;
//     dispatch(fetchProducts(res));
//   };
// }
