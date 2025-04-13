import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import {add} from "./store/cartSlice"

const Product = ({product}) => {
    const dispatch = useDispatch()
    const addToCart = (product)=>{
        dispatch(add(product))
    }
  return (
    <div style={{height:"400px",width:"300px"}}>
        <Card style={{ width: '18rem' }}>
            <div className='text-center'>

      <Card.Img variant="top" src={product.image} style={{height:"250px",width:"200px"}}/>
            </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         INR:{product.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>addToCart(product)}>Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product