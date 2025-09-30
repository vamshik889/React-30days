import React from 'react'
import { useUpdateProductMutation } from '../app/service/data'

const UpdateProduct = ({productId=10}) => {
  const [updateProduct,{data,error,isLoading}] =   useUpdateProductMutation()

  if(error){
    return <h1>Error</h1>
  }
  if(isLoading){
    return <h1>Loading...</h1>
  }

  const handleUpdateProduct = async ()=>{
    try {
        const updatedProductData = {
            title:"Updated the product",
        }
        await updateProduct(
            {id:productId,updatedProduct:updatedProductData}
        )
    } catch (error) {
        
    }
  }
  return (
    <>
    <h1>{data?.title}</h1>
    <button onClick={handleUpdateProduct} disabled={isLoading}>Update product</button>
    </>
    
  )
}

export default UpdateProduct