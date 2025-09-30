import React from 'react'
import { useDeleteProductMutation } from '../app/service/data'

const DeleteProduct = ({productId}) => {
   const [deleteProduct,{data,isLoading,error}] =  useDeleteProductMutation();

     if(error){
    return <h1>Error</h1>
  }
  if(isLoading){
    return <h1>Loading...</h1>
  }

  const handleDeleteProduct = async()=>{
    try {
        await deleteProduct(productId)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <>
    <h1>{data?.title? `${data?.title} is deleted successfuly`:"" }</h1>
    <button onClick={handleDeleteProduct}>Delete Product</button>
    </>
  )
}

export default DeleteProduct