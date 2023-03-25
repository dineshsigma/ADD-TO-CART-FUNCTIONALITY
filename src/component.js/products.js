import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



//import Showproducts from './showProducts';


function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(data);
    const [search, setSearch] = useState();
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await axios.get("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(response.data);
                setFilter(response.data);
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
                <div className='col-md-3'>
                    <Skeleton />
                </div>
                <div className='col-md-3'>
                    <Skeleton />
                </div>
                <div className='col-md-3'>
                    <Skeleton />
                </div>
                <div className='col-md-3'>
                    <Skeleton />
                </div>
            </>
        )

    }

    function Showproducts({ props }) {
        // console.log("itemsdinesh--", filter)
        return (
            <div>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct('jewelery')}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct('electronics')}>Electronics</button>
                </div>
                <Container>
                    <Row>
                        {filter.map((products, index) => {
                            return (
                                <Col xs="4" key={index}>
                                    <Card style={{ width: '18rem' }} key={products.id}>
                                        <Card.Img variant="top" src={products.image} alt={products.title} height="250px" />
                                        <Card.Body>
                                            <Card.Title>{products.title.substring(0, 100)}</Card.Title>
                                            <Card.Text>$:{products.price}</Card.Text>
                                            <button className='btn btn-outline-dark'><Link to={`/products/${products.id}`}>Buy</Link></button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>

        )

    }

    const filterProduct = (category) => {
        const updatedList = data.filter((x) => x.category === category);
        setFilter(updatedList)

    }

    let searchhandleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSearch(e.target.value);
        console.log("search---",search);
       
        function filterIt(arr, searchKey) {
            console.log("searchKey",searchKey,arr)
            // return arr.filter(function(obj) {
            //     console.log("obj----",obj);
            //   return Object.keys(obj).some(function(key) {
            //     return obj[key].includes(searchKey);
            //   })
            // });
          }

        filterIt(data,search)

        
        

    }

     console.log("data----", data);
    return (
        <div classNameName='container my-5 py-5'>
            <div classNameName='row'>
                <div classNameName='col-12 mb-5'>
                    <h1 classNameName='display-6 fw-bolder text-center'>Latest Products</h1>
                    <input
                        type="text"
                        placeholder="Search here" onChange={searchhandleChange} value={search}
                    />
                    <hr />

                </div>
            </div>
            <div classNameName='row justify-content-center'>
                {loading ? <Loading /> : <Showproducts data={data} />}

            </div>

        </div>
    )

}

export default Products