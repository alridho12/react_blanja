import React from 'react';
import NavbarHomePublic from '../components/NavbarHomePublic';
import CoroselTrend from '../components/CoroselTrend';
import Category from '../components/Category';
import NewProduct from '../components/NewProduct';
import PopularProduct from '../components/PopularProduct';
import LoginNavbar from '../components/LoginNavbar';
import Footer from '../components/Footer';

const Home = () => {
  const isLogin = localStorage.getItem('token')
  if (!isLogin) {
    return (
      <>
        <NavbarHomePublic />
        <main className="container">
          <CoroselTrend />
          <Category />
          <NewProduct />
          <PopularProduct />
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <LoginNavbar />
        <main className="container">
          <CoroselTrend />
          <Category />
          <NewProduct />
          <PopularProduct />
        </main>
        <Footer />
      </>
    );
  }
};

export default Home;