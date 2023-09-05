import React, { useEffect, useState } from 'react'
import MyOrder from '../components/MyOrder'
import LoginNavbar from '../components/LoginNavbar'
import SidebarProSell from '../components/SidebarProSell'
import SidebarProCus from '../components/SidebarProCus'
import Footer from '../components/Footer'


const MyOrders = () => {
    const userRole = localStorage.getItem('role')
    const [role, setRole] = useState('');

    useEffect(() => {
        if (userRole) {
            setRole(userRole);
        }
    }, [userRole]);
    return (
        <>
            <LoginNavbar />
            <main>
                <section className="container mt-5">
                    <div className="row">
                        <div className="col-md-4 left-section m-0 product">
                            {role === 'seller' && <SidebarProSell />}
                            {role === 'customer' && <SidebarProCus />}
                        </div>
                        <div className="col-md-8 ">
                            <MyOrder />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default MyOrders