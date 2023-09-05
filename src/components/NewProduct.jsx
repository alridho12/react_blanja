import React, { useEffect, useState } from 'react'
import stars from "../assets/image/Rating 5 stars.png"
import axios from 'axios';
import { FormatRupiah } from '@arismun/format-rupiah';
import { Link } from 'react-router-dom';

const NewProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/products`)
            .then((res) => {
                setProducts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = products.slice(firstPostIndex, lastPostIndex);
    return (
        <div>
            <section className="container mt-5">
                <h2 className="">New</h2>
                <hr style={{ borderColor: "red", borderWidth: "2px", borderStyle: "solid" }} />
                <p className="">You've never seen before!</p>
                <div className="container mt-5">
                    <div className="row m-0">
                        {currentPosts.map((product) => (
                            <div className="col-md-3 col-6 mb-md-5 p-1">
                                <Link to={`/DetailProduct/${product.product_id}`}>
                                    <div className="border rounded product">
                                        <img
                                            
                                            id='product-card-image'
                                            crossOrigin='Anonymous'
                                            src={product.image}
                                            alt="cloth"
                                        />
                                        <div className="px-3">
                                            <div style={{ height: 50 }} className='mb-2' >
                                                <p className='mb-md-0  pb-md-0' id='product-name'>
                                                    {product.product_name}
                                                </p>
                                            </div>
                                            {/* <p className="p-0 m-0">{product.brand}</p> */}
                                            <img className='ml-n1 mb-2' src={stars} alt="stars" />
                                            <div className='row m-0 d-flex justify-content-between align-items-center'>
                                                <p className="text-danger p-0 m-0" id="price-card"><FormatRupiah value={product.price} /></p>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewProduct