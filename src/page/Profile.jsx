import React from 'react'
import "../assets/style/Profile.css"
import MyProfile from '../components/MyProfile'
import SidebarProCus from '../components/SidebarProCus'
import SidebarProSell from '../components/SidebarProSell'
import LoginNavbar from '../components/LoginNavbar'

const Profile = () => {
  return (
    <>
      <LoginNavbar />
      <main>
        <section className="container mt-5">
          <div className="row">
            <div className="col-md-4 left-section m-0 product">
              <SidebarProSell />
            </div>
            <div className="col-md-8 ">
              <MyProfile />
            </div>
          </div>
        </section>
      </main>
    </>

  )
}

export default Profile