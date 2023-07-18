import React, { useEffect, useState } from 'react'
import '../assets/style/DetailProduct.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { FormatRupiah } from '@arismun/format-rupiah'
import SizeButton from '../components/SizeButton'
import TotalButton from '../components/TotalButton'
import stars from '../assets/image/Group 1288.png'
import black from '../assets/image/Ellipse 5.png'
import star from '../assets/image/activated.png'
import NewProduct from '../components/NewProduct'
import NavbarHomePublic from '../components/NavbarHomePublic'


const DetailProduct = () => {
    const { product_id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${product_id}`)
            .then((response) => {
                setProduct(response.data.data[0]);
                console.log();

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <NavbarHomePublic />
            <main>
                <section>
                    <div className="container">
                        <div className="mt-5 mb-5">
                            <a href="">Home</a>
                            <span>&gt;</span>
                            <a href="">Category</a>
                            <span>&gt;</span>
                            <a href="">T-shirt</a>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-md-4 left-section">
                            <img
                                style={{ borderRadius: 10 }}
                                crossOrigin='anonymous'
                                src={product.image}
                                alt="product"
                            />
                            <div className="row mt-2 m-0">
                                <div className="col-md-3 col-3 d-flex justify-content-center">
                                    <img
                                        style={{ borderRadius: 10 }}
                                        crossOrigin='anonymous'
                                        src={product.image}
                                        alt="product"
                                    />
                                </div>
                                <div className="col-md-3 col-3 d-flex justify-content-center">
                                    <img
                                        style={{ borderRadius: 10 }}
                                        crossOrigin='anonymous'
                                        src={product.image}
                                        alt="product"
                                    />
                                </div>
                                <div className="col-md-3 col-3 d-flex justify-content-center">
                                    <img
                                        style={{ borderRadius: 10 }}
                                        crossOrigin='anonymous'
                                        src={product.image}
                                        alt="product"
                                    />
                                </div>
                                <div className="col-md-3 col-3 d-flex justify-content-center">
                                    <img
                                        style={{ borderRadius: 10 }}
                                        crossOrigin='anonymous'
                                        src={product.image}
                                        alt="product"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 right-section">
                            <div>
                                <h1>{product.product_name}</h1>
                                <p>{product.brand}</p>
                            </div>
                            <div>
                                <img className='ml-0' src={stars} alt="stars" />
                            </div>
                            <div className="mt-3">
                                <span>Price</span>
                                <h1><FormatRupiah value={product.price}/></h1>
                            </div>
                            <div className="mt-3">
                                <p>Colour</p>
                                <div>
                                    <button style={{ borderStyle: "none", backgroundColor: "white" }}>
                                        <img src={black} alt="color" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3 row container m-0 p-0">
                                <div className="mr-5">
                                    <p style={{ textAlign: "center" }}>Size</p>
                                    <div className="row container m-0">
                                        <div>
                                            <SizeButton />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p style={{ textAlign: "center" }}>Total</p>
                                    <div className="row container m-0">
                                        <div>
                                            <TotalButton />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="mt-3">
                        <h1>Informasi product</h1>
                    </div>
                    <div className="mt-2">
                        <p>
                            Condition{" "}
                            <span style={{ color: "red" }}>
                                <br />
                                New
                            </span>
                        </p>
                    </div>
                    <div className="mt-2">
                        <p>
                            Description{" "}
                            <span>
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                <br />
                                <br />
                                Donec non magna rutrum, pellentesque augue eu, sagittis velit.
                                Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
                                malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim
                                vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique
                                placerat. Pellentesque a consequat mauris, vel suscipit ipsum.
                                <br />
                                Donec ac mauris vitae diam commodo vehicula. Donec quam elit,
                                sollicitudin eu nisl at, ornare suscipit magna.
                                <br />
                                <br />
                                Donec non magna rutrum, pellentesque augue eu, sagittis velit.
                                Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
                                malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim
                                vel turpis blandit imperdiet ac ac felis. In ultricies rutrum
                                tempus. Mauris vel molestie orci.
                            </span>
                        </p>
                    </div>
                    <div className="mt-3">
                        <h1>Product review</h1>
                    </div>
                    <div className="mt-2">
                        <div className="container row m-0 p-0">
                            <div>
                                <h1 style={{ fontSize: 60 }}>
                                    {product.rating}<span style={{ fontSize: "medium" }}>/5</span>
                                </h1>
                                <div className="row m-0">
                                    <img src={star} alt="stars" />
                                    <img src={star} alt="stars" />
                                    <img src={star} alt="stars" />
                                    <img src={star} alt="stars" />
                                    <img src={star} alt="stars" />
                                </div>
                            </div>
                            <div className="ml-md-5 ml-auto">
                                <div className="d-flex flex-column">
                                    <div className="d-flex justify-content-center">
                                        <img src={star} alt="stars" />
                                        <span> 5</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={star} alt="stars" />
                                        <span> 4</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={star} alt="stars" />
                                        <span> 3</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={star} alt="stars" />
                                        <span> 2</span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <img src={star} alt="stars" />
                                        <span> 1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-3">
                                <hr
                                    className="mt-2"
                                    style={{ border: "5px green solid", width: 120, borderRadius: 8 }}
                                />
                            </div>
                            <div className="ml-3 d-flex flex-column">
                                <span>5</span>
                                <span>0</span>
                                <span>0</span>
                                <span>0</span>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container p-0">
                    <hr
                        className="mt-5"
                        style={{ border: "2px color #8E8E93 solid", width: "100%" }}
                    />
                </div>
                <section className="container">
                    <div className="mt-5">
                        <h1>
                            You can also like this
                            <br />
                            <p style={{ fontSize: "medium", paddingTop: 1, color: "#8E8E93" }}>
                                You’ve never seen it before!
                            </p>
                        </h1>
                    </div>
                    <div className="row mt-3 container m-0">
                       <NewProduct />
                    </div>
                </section>
            </main>
        </>

    )
}

export default DetailProduct