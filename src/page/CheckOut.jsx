import React, { useEffect, useState } from 'react'
import '../assets/style/CheckOut.css'
import LoginNavbar from '../components/LoginNavbar'
import Footer from '../components/Footer'
import axios from 'axios';
import ModalAddressUpdate from '../components/ModalAddressUpdate'
import { FormatRupiah } from '@arismun/format-rupiah';


const CheckOut = () => {
    const idUser = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [product, setProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/address/customer/${idUser}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [idUser])


    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/orders/users/${idUser}`)
            .then((res) => {
                setProduct(res.data.data);
                const initialTotalPrice = res.data.data.reduce((acc, item) => {
                    return acc + (item.price * item.quantity);
                }, 0);
                setTotalPrice(initialTotalPrice);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [idUser]);

    return (
        <>
            <LoginNavbar />
            <main>
                <section>
                    <div className="container" id='checkout'>
                        <h1 className='mt-md-5 my-3'>Checkout</h1>
                        <p id="main-p">Shipping Adress</p>
                        <div className="row">
                            <div className="col-md-8 ">
                                <div className="border rounded" id='select'>
                                    {data?.map((address) => (
                                        <div key={address.id_address} className='p-2' style={{ border: "2px #9b9b9b dashed" }}>
                                            <div className=' d-flex justify-content-between align-items-center'>
                                                <p style={{ color: "black" }}>{address.recepient_name}</p>
                                            </div>
                                            <span>{address.address}, {address.city_district}, {address.postal_code} [{address.address_as}]</span>
                                            <ModalAddressUpdate id_address={address.id_address} address_as={address.address_as} recepient_name={address.recepient_name} city_district={address.city_district} address={address.address} recepient_telephone={address.recepient_telephone} postal_code={address.postal_code} id_customer={address.id_customer} />
                                        </div>
                                    ))}
                                </div>
                                {product.map((product) => (
                                    <div className="border mt-3 rounded align-items-center row ml-0" id='products'>
                                        <div className="col-md-7 col-9 p-0 m-0 row">
                                            <div className="col-md-3 col-4 d-flex justify-content-center">
                                                <img
                                                    src={product.image}
                                                    alt="product"
                                                    id='product-pho'
                                                />
                                            </div>
                                            <div className="col-md-9 col-8 ">
                                                <p style={{color:"black"}}>
                                                    {product.product_name}
                                                    <br />
                                                    <span>{product.brand}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-3 d-flex justify-content-end">
                                            <p className="pr-md-3" style={{color:"black"}}><FormatRupiah value={product.price * (product.quantity)} /></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-4 my-3 mt-md-0">
                                <section className="border rounded summary p-3">
                                    <div className="container">
                                        <div>
                                            <p>Shopping summary</p>
                                        </div>
                                        <div className="row align-items-centerd m-0 ">
                                            <div className="col-md-6">
                                                <span id="order">Order</span>
                                            </div>
                                            <div className="col-md-6">
                                                <h5><FormatRupiah value={totalPrice} /></h5>
                                            </div>
                                        </div>
                                        <div className="row align-items-centerd m-0 ">
                                            <div className="col-md-6">
                                                <span id="order">Delivery</span>
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="">Rp 0</h5>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row align-items-centerd m-0 ">
                                            <div className="col-md-7">
                                                <p id='order'>Shopping summary</p>
                                            </div>
                                            <div className="col-md-5">
                                                <p style={{ fontSize: '16px', fontWeight: '500', color: 'black' }}><FormatRupiah value={totalPrice} /></p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <a href="./checkout.html">
                                                <button className="button_buy">select payment</button>
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default CheckOut