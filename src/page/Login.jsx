import React, { useState } from 'react';
import logo from "../assets/image/Group 1158 (2).png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../assets/style/Login.css"


const Login = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("customer"); // Default role

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleLoginCustomer = (e) => {
    e.preventDefault();

    if (!customerLogin.email || !customerLogin.password) {
      alert("Please fill in both email and password.");
      return;
    }

    const customerLoginData = {
      role: "customer",
      email: customerLogin.email,
      password: customerLogin.password,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}/users/login`, customerLoginData)
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("token", res.data.data.token)
          localStorage.setItem("id", res.data.data.id_customer)
          localStorage.setItem("role", res.data.data.role)
          alert("Successful Login");
          navigate("/Home");
        } else if (res.data.message === "email is incorrect") {
          alert("Email Wrong");
        }else if (res.data.message === "password is incorrect") {
          alert("Password Wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLoginSeller = (e) => {
    e.preventDefault();

    if (!sellerLogin.email || !sellerLogin.password) {
      alert("Please fill in both email and password.");
      return;
    }

    const sellerLoginData = {
      role: "seller",
      email: sellerLogin.email,
      password: sellerLogin.password,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}/sellers/login`, sellerLoginData)
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("token", res.data.data.token)
          localStorage.setItem("id", res.data.data.id_seller)
          localStorage.setItem("role", res.data.data.role)
          alert("Successful Login");
          navigate("/Home");
        } else if (res.data.message === "email is incorrect") {
          alert("Email Wrong");
        }
        else if (res.data.message === "password is incorrect") {
          alert("Password Wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // State untuk pelanggan
  const [customerLogin, setCustomerLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeCustomer = (e) => {
    setCustomerLogin({
      ...customerLogin,
      [e.target.name]: e.target.value,
    });
  };

  // State untuk penjual
  const [sellerLogin, setSellerLogin] = useState({
    email: "",
    password: "",
  });

  const handleChangeSeller = (e) => {
    setSellerLogin({
      ...sellerLogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container" id="global-container">
      <img src={logo} alt="logo" />
      <p className="text-center py-3">Please login with your account</p>
      <ul className="nav nav-pills mb-3 justify-content-center" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link${selectedRole === 'customer' ? ' active btn-danger' : ''}`}
            id="pills-home-tab"
            onClick={() => handleRoleChange('customer')}
          >
            Customer
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link${selectedRole === 'seller' ? ' active btn-danger' : ''}`}
            id="pills-profile-tab"
            onClick={() => handleRoleChange('seller')}
          >
            Seller
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade${selectedRole === 'customer' ? ' show active' : ''}`}
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <form onSubmit={handleLoginCustomer}>
            <div className="form-group">
              <input
                name="email"
                className="form-control"
                placeholder="Email"
                type="email"
                value={customerLogin.email}
                onChange={handleChangeCustomer}
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                className="form-control"
                placeholder="Password"
                type="password"
                value={customerLogin.password}
                onChange={handleChangeCustomer}
              />
            </div>
            <div className="form-group">
              <Link to="/Forgot" className="float-right py-3 text-danger">
                Forgot password?
              </Link>
              <button type="submit" className="btn btn-danger btn-block rounded-pill">
                Login
              </button>
            </div>
          </form>
          <p className="text-regis">
            Don't have a blanja account?
            <Link className="text-danger" to="/Signup">
              Sign Up
            </Link>
          </p>
        </div>
        <div
          className={`tab-pane fade${selectedRole === 'seller' ? ' show active' : ''}`}
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <form onSubmit={handleLoginSeller}>
            <div className="form-group">
              <input
                name="email"
                className="form-control"
                placeholder="Email"
                type="email"
                value={sellerLogin.email}
                onChange={handleChangeSeller}
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                className="form-control"
                placeholder="Password"
                type="password"
                value={sellerLogin.password}
                onChange={handleChangeSeller}
              />
            </div>
            <div className="form-group">
              <Link to="#" className="float-right py-3 text-danger">
                Forgot password?
              </Link>
              <button type="submit" className="btn btn-danger btn-block rounded-pill">
                Login
              </button>
            </div>
          </form>
          <p className="text-regis">
            Don't have a blanja account?
            <Link className="text-danger" to="/Signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;