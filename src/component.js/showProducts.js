import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {addCart} from '../redux/action'


function Showproducts() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const addProducts  = (product)=>{
    console.log("dinesh-----",product)
    dispatch(addCart(product));
  }
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log("response-------id", response);
      if (componentMounted) {
        setProduct(response.data);
        setLoading(false)
      }
      return () => {
        componentMounted = false
      }
    }
    getProducts();


  }, [])

  const Loading = () => {
    return (
      <>
        <div className='col-md-6' style={{lineHeight:2}}>
          <Skeleton  height={400}/>
        </div>
        <div className='col-md-6'>
          <Skeleton  height={50} width={300}/>
          <Skeleton  height={75} />
          <Skeleton  height={25} width={150}/>
          <Skeleton  height={50} />
          <Skeleton  height={150} />
          <Skeleton  height={50}  width={100} style={{marginLeft:6}}/>
        </div>
       
      </>
    )

  }

  function Singleproducts(product) {
    console.log("items--", product.data)
    return (
     <>
     <div className='col-md-6'>
       <img src={product.data.image}  alt={product.data.title} height="400px" width="400px"/> 

     </div>
     <div className='col-md-6'>
       <h4 className='text-uppercase text-black-50'>
         {product.data.category}
       </h4>
       <h1 className='display-5'>{product.data.title}</h1>
       <p className='lead fw-bolder'>Rating {product.data.rating && product.data.rating.rate}
       <i className='fa fa-star'></i>
       </p>
       <h3 className='display-6 fw-bold my-4'> $ {product.data.price}</h3>

       <p className='lead'>{product.data.description}</p>
       <button className='btn btn-outline-dark' onClick={()=>addProducts(product.data)}>Add to Cart</button>
       <button className='btn btn-dark ms-2 px-3 py-2'><Link to={`/cart`}>Go to Cart</Link></button>

     </div>
     </> 

    )

  }

  console.log("product---", product)

  return (
    <div>
      <div className='container py-5'>
        <div className='row py-5'>
          {loading ? <Loading /> : <Singleproducts data={product} />}

        </div>

      </div>
    </div>

  )

}

export default Showproducts