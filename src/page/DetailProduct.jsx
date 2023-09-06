import React, { useEffect, useState } from 'react'
import '../assets/style/DetailProduct.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { FormatRupiah } from '@arismun/format-rupiah'
import SizeButton from '../components/SizeButton'
import stars from '../assets/image/Group 1288.png'
import black from '../assets/image/Ellipse 5.png'
import star from '../assets/image/activated.png'
import NewProduct from '../components/NewProduct'
import NavbarAuth from '../components/NavbarAuth'
import Footer from '../components/Footer'


const DetailProduct = () => {
    const navigate = useNavigate();
    const { product_id } = useParams()
    const idUser = localStorage.getItem("id")
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/products/${product_id}`)
            .then((response) => {
                setProduct(response.data.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [product_id]);

    const [data, setData] = useState({
        product_id: product_id,
        quantity: 1,
        id_customer: idUser,
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddToChart = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_KEY}/orders`, data)
            .then((res) => {
                if (res.data.statusCode === 201) {
                    alert("Product add to chart")
                } else {
                    alert("error");
                }
            });
    }

    const handleBuyNow = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_KEY}/orders`, data)
            .then((res) => {
                if (res.data.statusCode === 201) {
                    navigate('/CheckOut')
                } else {
                    alert("error");
                }
            });
    }

    return (
        <>
            <NavbarAuth />
            <main className="container">
                <section className="container">
                    <div className="mt-5 mb-5">
                        <Link to="#">Home</Link>
                        <span>&gt;</span>
                        <Link to="#">Category</Link>
                        <span>&gt;</span>
                        <Link to="#">T-shirt</Link>
                    </div>
                </section>
                <section className="container">
                    <div className="row">
                        <div className="col-md-4 left-section">
                            <img
                                style={{ borderRadius: 5, height: 380, width: 340 }}
                                crossOrigin='anonymous'
                                src={product.image}
                                alt="product"
                            />
                            <div className="row mt-2 m-0 d-flex justify-content-between">
                                <div className="col-md-3 col-3">
                                    <img
                                        style={{ borderRadius: 2 }}
                                        crossOrigin='anonymous'
                                        src={product.image}
                                        alt="product"
                                    />
                                </div>
                                <div className="col-md-3 col-3">
                                    <img
                                        style={{ borderRadius: 2 }}
                                        crossOrigin='anonymous'
                                        src={product.image}
                                        alt="product"
                                    />
                                </div>
                                <div className="col-md-3 col-3">
                                    <img
                                        style={{ borderRadius: 2 }}
                                        crossOrigin='anonymous'
                                        src={product.image}
                                        alt="product"
                                    />
                                </div>
                                <div className="col-md-3 col-3">
                                    <img
                                        style={{ borderRadius: 2 }}
                                        crossOrigin='anonymous'
                                        src={product.image}
                                        alt="product"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 right-section my-md-0 my-3">
                            <div>
                                <h1>{product.product_name}</h1>
                                <p>{product.brand}</p>
                            </div>
                            <div>
                                <img className='ml-0' src={stars} alt="stars" />
                            </div>
                            <div className="mt-3">
                                <span>Price</span>
                                <h1><FormatRupiah value={product.price} /></h1>
                                {/* <h1>Rp.{
                                    new Intl.NumberFormat("Rp", {
                                        maximumSignificantDigits: 3
                                    }).format(product.price)
                                }</h1> */}
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
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            color: "#9b9b9b",
                                            textAlign: "center"

                                        }}
                                        id='quanti'
                                    >
                                        Size
                                    </p>
                                    <div className="row container m-0">
                                        <div>
                                            <SizeButton />
                                        </div>
                                    </div>
                                </div>
                                <div >
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            color: "#9b9b9b",
                                            textAlign: "center"

                                        }}
                                        id='quanti'
                                    >
                                        Quantity
                                    </p>
                                    <div className="color-groups row">
                                        <div
                                            className="color color-white text-center"
                                            style={{
                                                fontSize: 20,
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "50%",
                                                backgroundColor: "#D4D4D4",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            onClick={() => {
                                                setData({
                                                    ...data,
                                                    quantity: Math.max(1, data.quantity - 1),
                                                });
                                            }}
                                        >
                                            -
                                        </div>

                                        <input
                                            type="text"
                                            className="color color text-center"
                                            style={{
                                                borderColor: "transparent",
                                                width: "70px",
                                            }}
                                            placeholder="1"
                                            name="quantity"
                                            value={data.quantity}
                                            onChange={handleChange}
                                        />

                                        <div
                                            className="color color-white text-center"
                                            style={{
                                                fontSize: 20,
                                                width: "36px",
                                                height: "36px",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                boxShadow: "0px 0px 4px rgba(142, 142, 142, 0.25)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "black",
                                            }}
                                            onClick={() => {
                                                setData({
                                                    ...data,
                                                    quantity: parseInt(data.quantity, 10) + 1,
                                                });
                                            }}
                                        >
                                            +
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row m-0 mt-4'>
                                <button className='btn btn-outline-danger mr-3' onClick={handleAddToChart}>
                                    Add to cart
                                </button>
                                {/* <Link to={'/CheckOut'} > */}
                                <button className='btn btn-danger' onClick={handleBuyNow}>
                                    Buy now
                                </button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="mt-4">
                        <h1>Product information</h1>
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
                                {product.description}
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
                                    <img src={star} alt="stars" id='star' />
                                    <img src={star} alt="stars" id='star' />
                                    <img src={star} alt="stars" id='star' />
                                    <img src={star} alt="stars" id='star' />
                                    <img src={star} alt="stars" id='star' />
                                </div>
                            </div>
                            <div className="ml-md-5 ml-auto">
                                <div className="d-flex flex-column">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={star} alt="stars" id='star' />
                                        <span> 5</span>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={star} alt="stars" id='star' />
                                        <span> 4</span>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={star} alt="stars" id='star' />
                                        <span> 3</span>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={star} alt="stars" id='star' />
                                        <span> 2</span>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img src={star} alt="stars" id='star' />
                                        <span> 1</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-3">
                                <hr
                                    id='progres-rating'
                                    className="mt-md-2 mt-1"
                                    style={{ borderRadius: 8 }}
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
                <section className="container">
                    <hr
                        className="mt-5"
                        style={{ border: "2px color #8E8E93 solid" }}
                    />
                    <div className="mt-5 product">
                        <h1 className='px-3' style={{ color: "red" }}>
                            You can also like this
                        </h1>
                        <NewProduct />
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default DetailProduct