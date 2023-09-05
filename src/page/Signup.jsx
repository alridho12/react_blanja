import React, { useState } from "react";
import logo from "../assets/image/Group 1158 (2).png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/style/Login.css"


const Signup = () => {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("customer"); // Default role

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleSignupCustomer = (e) => {
    e.preventDefault();
    const customerSignupData = {
      role: "customer",
      fullname: customerSignup.fullname,
      email: customerSignup.email,
      password: customerSignup.password,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}/users/register`, customerSignupData)
      .then((res) => {
        alert("Successful Customer Signup");
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Customer Signup Failed");
      });
  };

  const handleSignupSeller = (e) => {
    e.preventDefault();
    const sellerSignupData = {
      role: "seller",
      store_name: sellerSignup.store_name,
      email: sellerSignup.email,
      password: sellerSignup.password,
    };

    axios
      .post(`${process.env.REACT_APP_API_KEY}/sellers/register`, sellerSignupData)
      .then((res) => {
        alert("Successful Seller Signup");
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Seller Signup Failed");
      });
  };

  // State untuk pelanggan
  const [customerSignup, setCustomerSignup] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChangeCustomer = (e) => {
    setCustomerSignup({
      ...customerSignup,
      [e.target.name]: e.target.value,
    });
    console.log(customerSignup);
  };


  // State untuk penjual
  const [sellerSignup, setSellerSignup] = useState({
    store_name: "",
    email: "",
    password: "",
  });

  const handleChangeSeller = (e) => {
    setSellerSignup({
      ...sellerSignup,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container" id="global-container">
        <img src={logo} alt="logo" />
        <p className="text-center py-3">Please sign up with your account</p>
        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${selectedRole === "customer" ? " active btn-danger" : ""
                }`}
              onClick={() => handleRoleChange("customer")}
            >
              Customer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${selectedRole === "seller" ? " active btn-danger" : ""
                }`}
              onClick={() => handleRoleChange("seller")}
            >
              Seller
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          {selectedRole === "customer" && (
            <div
              className={`tab-pane fade${selectedRole === "customer" ? " show active" : ""
                }`}
              id="pills-customer"
              role="tabpanel"
              aria-labelledby="pills-customer-tab"
            >
              <form onSubmit={handleSignupCustomer}>
                <div className="form-group">
                  <input
                    name="fullname"
                    className="form-control"
                    placeholder="Full Name"
                    type="text"
                    value={customerSignup.fullname}
                    onChange={handleChangeCustomer}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    value={customerSignup.email}
                    onChange={handleChangeCustomer}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    value={customerSignup.password}
                    onChange={handleChangeCustomer}
                  />
                </div>
                <button
                  className="btn btn-danger btn-block rounded-pill"
                  type="submit"
                >
                  Signup
                </button>
              </form>
            </div>
          )}
          {selectedRole === "seller" && (
            <div
              className={`tab-pane fade${selectedRole === "seller" ? " show active" : ""
                }`}
              id="pills-seller"
              role="tabpanel"
              aria-labelledby="pills-seller-tab"
            >
              <form onSubmit={handleSignupSeller}>
                <div className="form-group">
                  <input
                    name="store_name"
                    className="form-control"
                    placeholder="Store Name"
                    type="text"
                    value={sellerSignup.store_name}
                    onChange={handleChangeSeller}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    type="email"
                    value={sellerSignup.email}
                    onChange={handleChangeSeller}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    type="password"
                    value={sellerSignup.password}
                    onChange={handleChangeSeller}
                  />
                </div>
                <button
                  className="btn btn-danger btn-block rounded-pill"
                  type="submit"
                >
                  Signup
                </button>
              </form>
            </div>
          )}
        </div>
        <p className="text-regis my-3">
          Already have a Blanja account?{" "}
          <Link className="text-danger" to="/Login">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;