import React, { useState } from "react";
import { useAddNewProductMutation } from "../app/service/data";

const AddProduct = () => {
  const [text, setText] = useState("");

  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (error) {
    return <h4>Error...</h4>;
  }
  if (isLoading) {
  }
  const handleAddProduct = async () => {
    if (!text.trim()) {
      return;
    }
    let id = Date.now();
    try {
      const newProduct = {
        id,
        title: text,
        description: `Description for ${id}`,
      };

      await addNewProduct(JSON.stringify(newProduct));
      setText("")
    } catch (error) {}
  };

  console.log(data);
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{data?.id}</p>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      <button onClick={handleAddProduct} disabled={isLoading || !text.trim()}>
        Add product
      </button>
    </div>
  );
};

export default AddProduct;
