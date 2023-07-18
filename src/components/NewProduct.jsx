import React, { useEffect, useState } from 'react'
import stars from "../assets/image/Rating 5 stars.png"
import axios from 'axios';
import { FormatRupiah } from '@arismun/format-rupiah';
import { Link } from 'react-router-dom';

const NewProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                setProducts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])
    return (
        <div>
            <section className="mt-5">
                <h2 className="ml-3">New</h2>
                <p className="ml-3">You've never seen before!</p>
                <div className="container mt-5">
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-md-3 col-sm-6 mb-5">
                               <Link to={`/DetailProduct/${product.product_id}`}>
                               <div className="border rounded product">
                                    <img
                                        className="w-100"
                                        crossOrigin='Anonymous'
                                        src={product.image}
                                        alt="cloth"
                                    />
                                    <div className="p-2">
                                        <h5 className="card-title">
                                            {product.product_name}
                                        </h5>
                                        <h5 className="text-danger"><FormatRupiah value={product.price} /></h5>
                                        <p>{product.brand}</p>
                                        <img className='ml-n1' src={stars} alt="stars" />
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