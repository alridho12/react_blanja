import React from 'react'
import "../assets/style/Profile.css"
import MyAddress from '../components/MyAddress'
import SidebarProCus from '../components/SidebarProCus'
import LoginNavbar from '../components/LoginNavbar'
import Footer from '../components/Footer'

const ShippingAddres = () => {
    return (
        <>
            <LoginNavbar />
            <main>
                <section className="container mt-5" style={{height:"80vh"}}>
                    <div className="row">
                        <div className="col-md-4 left-section m-0 product">
                            <SidebarProCus />
                        </div>
                        <div className="col-md-8 ">
                            <MyAddress />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default ShippingAddres