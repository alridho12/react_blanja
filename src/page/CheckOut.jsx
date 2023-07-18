import React from 'react'
import '../assets/style/CheckOut.css'
import LoginNavbar from '../components/LoginNavbar'
import jaket from "../assets/image/kemal-alkan-_BDBEP0ePQc-unsplash 1.png"
import jazz from "../assets/image/Mask Group.png"

const CheckOut = () => {
    return (
        <>
            <LoginNavbar />
            <main>
                <section className='mt-5'>
                    <div className="container">
                        <h1>Checkout</h1>
                        <p id="main-p">Shipping Adress</p>
                        <div className="row">
                            <div className="col-md-8 ">
                                <div className="border rounded" id='select'>
                                    <div className="d-flex flex-column justify-content-center container ">
                                        <div className="mt-2">
                                            <h5>Andreas Jane</h5>
                                        </div>
                                        <div>
                                            <p id="sub-p">
                                                Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja,
                                                Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok
                                                c 16] Sokaraja, Kab. Banyumas, 53181
                                            </p>
                                        </div>
                                        <div className="mt-md-3 ">
                                            <input
                                                id="sub-inp"
                                                type="text"
                                                placeholder="Choose another address"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border mt-3 rounded align-items-center row ml-0" id='products'>
                                    <div className="col-md-7 col-9 p-0 m-0 row">
                                        <div className="col-md-3 col-4 d-flex justify-content-center">
                                            <img src={jazz} alt="product" />
                                        </div>
                                        <div className="col-md-9 col-8 ">
                                            <p>
                                                Men's formal suit - Black
                                                <br />
                                                <span>Zalora Cloth</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-3 d-flex justify-content-end">
                                        <p className="pr-md-3">$ 20.0</p>
                                    </div>
                                </div>
                                <div className="border mt-3 rounded align-items-center row ml-0" id='products'>
                                    <div className="col-md-7 col-9 p-0 m-0 row">
                                        <div className="col-md-3 col-4 d-flex justify-content-center">
                                            <img
                                                src={jaket}
                                                alt="product"
                                                id="kemal"
                                            />
                                        </div>
                                        <div className="col-md-9 col-8 ">
                                            <p>
                                                Men's Jacket jeans
                                                <br />
                                                <span>Zalora Cloth</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-3 d-flex justify-content-end">
                                        <p className="pr-md-3">$ 20.0</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3 mt-md-0">
                                <section className="border rounded summary">
                                    <div className="container">
                                        <div>
                                            <p>Shopping summary</p>
                                        </div>
                                        <div className="row align-items-centerd m-0 ">
                                            <div className="col-md-6">
                                                <span id="order">Order</span>
                                            </div>
                                            <div className="col-md-6">
                                                <h5>$ 40.0</h5>
                                            </div>
                                        </div>
                                        <div className="row align-items-centerd m-0 ">
                                            <div className="col-md-6">
                                                <span id="order">Delivery</span>
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="pl-2">$ 5.0</h5>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row align-items-centerd m-0 ">
                                            <div className="col-md-7">
                                                <p id='order'>Shopping summary</p>
                                            </div>
                                            <div className="col-md-5">
                                                <p style={{fontSize:'16px',fontWeight:'500',color:'black'}}>$ 45.0</p>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center pb-2">
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
        </>

    )
}

export default CheckOut