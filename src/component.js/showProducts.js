import React, { useState, useEffect,useRef } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {addCart} from '../redux/reducer/addcart'


function Showproducts() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [cart,cartDetails] = useState([])
  const dispatch = useDispatch();
  
  const addCartDetails = useSelector((state) => state.addcart);
  console.log("addCartDetails--",addCartDetails.cartDetails);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
   
  };
 
  const addProducts  = (product)=>{
    console.log("addProducts----",product);
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);
   
   
    dispatch(addCart(product)).then((response)=>{
      console.log("response--",response.payload);
      
    });
    
  }

  console.log("cart--",cart);

  
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
       
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
       <button className='btn btn-dark ms-2 px-3 py-2'><Link to={`/products`}>Go to Cart</Link></button>

     </div>
     </> 

    )

  }

 

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