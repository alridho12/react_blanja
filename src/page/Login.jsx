import React, { useState } from 'react';
import logo from "../assets/image/Group 1158 (2).png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../assets/style/Login.css"


const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    role: "customer", 
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (role) => {
    setLogin({
      ...login,
      role: role,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login", login)
      .then((res) => {
        const { data } = res.data;
        if (data.role !== login.role) {
          alert("Invalid role");
          return;
        }
        
        alert("Successful Login");
        localStorage.setItem("token", data.token);
        navigate("/Home");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Email/Password Wrong");
      });
  };

  return (
    <div className="container" id='global-container'>
      <img src={logo} alt="logo" />
      <p className="text-center py-3">Please login with your account</p>
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link${login.role === "customer" ? " active" : ""} `}
            id="pills-home-tab"
            onClick={() => handleRoleChange("customer")}
          >
            Customer
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link${login.role === "seller" ? " active" : ""}`}
            id="pills-profile-tab"
            onClick={() => handleRoleChange("seller")}
          >
            Seller
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                name="email"
                className="form-control"
                placeholder="Email"
                type="email"
                value={login.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                className="form-control"
                placeholder="Password"
                type="password"
                value={login.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <Link to="/Forgot" className="float-right py-3 text-danger">
                Forgot password?
              </Link>
              <button type='submit' className="btn btn-danger btn-block rounded-pill">
                LOGIN
              </button>
            </div>
          </form>
          <p className="text-regis">
            Don't have a blanja account?
            <Link className="text-danger" to="/Signup">Sign Up</Link>
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                id='email'
                name="email"
                className="form-control"
                placeholder="Email"
                value={login.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id='password'
                name='password'
                className="form-control"
                placeholder="Password"
                value={login.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <Link className="float-right py-3 text-danger" to="#">
                Forgot password?
              </Link>
              <button type='submit' className="btn btn-danger btn-block rounded-pill">
                LOGIN
              </button>
            </div>
          </form>
          <p className="text-regis">
            Don't have a blanja account?
            <Link className="text-danger" to="/Signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;