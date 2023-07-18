import React, { useState } from "react";
import logo from "../assets/image/Group 1158 (2).png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/style/Login.css"

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [selectedRole, setSelectedRole] = useState("customer");

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const signupData = {
      ...signup,
      role: selectedRole,
    };
    axios
      .post("http://localhost:3000/users/register", signupData)
      .then((res) => {
        alert("Successful Signup");
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err.response);
        alert("Signup Failed");
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
              className={`nav-link${selectedRole === "customer" ? " active" : ""}`}
              onClick={() => handleRoleChange("customer")}
            >
              Customer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link${selectedRole === "seller" ? " active" : ""}`}
              onClick={() => handleRoleChange("seller")}
            >
              Seller
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className={`tab-pane fade${selectedRole === "customer" ? " show active" : ""}`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  name="fullname"
                  className="form-control"
                  placeholder="Full Name"
                  type="text"
                  value={signup.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  value={signup.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  value={signup.password}
                  onChange={handleChange}
                />
              </div>
              {/* other fields for customer role */}
            </form>
          </div>
          <div
            className={`tab-pane fade${selectedRole === "seller" ? " show active" : ""}`}
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <form onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  name="fullname"
                  className="form-control"
                  placeholder="Full Name"
                  type="text"
                  value={signup.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  value={signup.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  value={signup.password}
                  onChange={handleChange}
                />
              </div>
              {/* other fields for seller role */}
            </form>
          </div>
        </div>
        <div className="form-group">
          <Link className="float-right py-3 text-danger" to="#">
            Forgot password?
          </Link>
          <button
            className="btn btn-danger btn-block rounded-pill"
            type="submit"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
        <p className="mt-5 Register">
          Already have a Blanja account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;