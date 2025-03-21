import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchProducts();
    console.log(product);
  }, []);

  const fetchProducts = async () => {
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      let res = await data.json();
      setProduct(res);
    } catch (error) {
      console.log(error);
    }
  };

 return(
    product.map((prod) => {
        return <Card key={prod.id} {...prod}/>;
      })
 )

};

export default Products;
