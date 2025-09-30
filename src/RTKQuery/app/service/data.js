import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //get all products (reading data)
    getAllProducts: builder.query({
      query: () => "/products",
    }),

    //get product By id
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    //Add a new product
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:updatedProduct
      }),
    }),
    deleteProduct:builder.mutation({
        query:(id)=>({
            url:`/products/${id}`,
            method:"DELETE",
            
        })
    })
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productsApi; //based on the endpoint it will provide a hook for us like useGetAllProductQuery
