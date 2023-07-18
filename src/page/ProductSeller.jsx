import React from 'react'
import "../assets/style/Profile.css"
import SidebarProCus from '../components/SidebarProCus'
import Myproduct from '../components/MyProduct'
import LoginNavbar from '../components/LoginNavbar'

const ProductSeller = () => {
    return (
        <>
            <LoginNavbar />
            <main>
                <section className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 left-section m-0 product">
                            <SidebarProCus />
                        </div>
                        <div className="col-md-8 ">
                            <Myproduct />
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export default ProductSeller