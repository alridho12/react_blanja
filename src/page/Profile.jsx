import React, { useEffect, useState } from 'react'
import "../assets/style/Profile.css"
import MyProfile from '../components/MyProfile'
import SidebarProCus from '../components/SidebarProCus'
import SidebarProSell from '../components/SidebarProSell'
import LoginNavbar from '../components/LoginNavbar'
import Footer from '../components/Footer'
import MyProfileSeller from '../components/MyProfileSeller'




const Profile = () => {
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
            {role === 'seller' && <MyProfileSeller/>}
            {role === 'customer' && <MyProfile />}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>

  )
}

export default Profile