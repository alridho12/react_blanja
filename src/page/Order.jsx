import React from 'react'
import '../assets/style/Order.css'
import LoginNavbar from '../components/LoginNavbar'
import jazz from "../assets/image/Mask Group.png"
import jaket from "../assets/image/kemal-alkan-_BDBEP0ePQc-unsplash 1.png"
import quant from "../assets/image/Group 1173.png"

const Order = () => {
    return (
        <>
            <LoginNavbar />
            <main>
                <section>
                    <div className="container">
                        <h1 className="mt-5 mb-3"> My bag</h1>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="border rounded align-items-center row" id='selek'>
                                    <div className="p-3 col-md-1 col-2">
                                        <input className="checkbox" type="checkbox" name="checkbox" />
                                    </div>
                                    <div className="col-md-8 col-6">
                                        <h5>
                                            Select all items<span> (2 items selected)</span>
                                        </h5>
                                    </div>
                                    <div className="p-3 col-md-3 col-4 d-flex justify-content-center">
                                        <button type="button" className="delete" style={{fontSize:'20px',fontWeight:'500'}}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3 border rounded row align-items-center row"id='prd'>
                                    <div className="p-3 col-md-1 col-2 ">
                                        <input className="checkbox" type="checkbox" name="checkbox" />
                                    </div>
                                    <div className="row m-0 p-0 col-md-7 col-7 align-items-center">
                                        <img
                                            className="col-md-4 col-4 "
                                            src={jazz}
                                            alt="product"
                                        />
                                        <div className="col-md-8 col-8 ">
                                            <p style={{color:'black'}}>
                                                Men's formal suit - Black
                                                <br />
                                                <span>Zalora Cloth</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-3 m-0 row align-items-center">
                                        <img
                                            src={quant}
                                            alt="total"
                                            className="total"
                                        />
                                        <p className="price">$ 20.0</p>
                                    </div>
                                </div>
                                <div className="mt-3 border rounded row align-items-center row" id='prd'>
                                    <div className="p-3 col-md-1 col-2 ">
                                        <input className="checkbox" type="checkbox" name="checkbox" />
                                    </div>
                                    <div className="row m-0 p-0 col-md-7 col-7 align-items-center">
                                        <img
                                            className="col-md-4 col-4 kemal"
                                            src={jaket}
                                            alt="product"
                                        />
                                        <div className="col-md-8 col-8">
                                            <p style={{color:'black'}}>
                                                Men's Jacket jeans
                                                <br />
                                                <span>Zalora Cloth</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-3 m-0 right row align-items-center">
                                        <img
                                            src={quant}
                                            alt="total"
                                            className="total"
                                        />
                                        <p className="price">$ 20.0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="mt-3 mt-md-0 border rounded align-items-center summary">
                                    <div className="col-md-12">
                                        <p>Shopping summary</p>
                                    </div>
                                    <div className="col-md-12 row d-flex justify-content-md-between align-items-center">
                                        <span className="">Total price</span>
                                        <p className="">$ 40.0</p>
                                    </div>
                                    <div className="text-center col-md-12 d-flex pb-3">
                                        <button className="buy">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export default Order