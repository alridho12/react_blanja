import React from 'react'
import searchLogo from "../assets/image/Search Glyph.png"
import logo from "../assets/image/Group 1158 (2).png"
import filter from "../assets/image/filter 1.png"
import { Link, useNavigate } from 'react-router-dom'
const LoginNavbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')
        alert('Logout Successful')
        navigate('/login')
    }
    return (
        <div>
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <Link to={'/home'}>
                        <img
                            className="logo mr-4"
                            src={logo}
                            alt="logo"
                        />
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarScroll"
                            aria-controls="navbarScroll"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul
                                className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
                                style={{ maxHeight: 100 }}
                            >
                                <li className="nav-item active">
                                    <form className="d-flex">
                                        <input
                                            className="form-control mr-2" id='input'
                                            type="search "
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <img
                                            className="logosearch"
                                            src={searchLogo}
                                            alt=""
                                        />
                                    </form>
                                </li>
                                <li className="nav-item squer">
                                    <img
                                        className="logo_2"
                                        src={filter}
                                        alt="cart"
                                    />
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0 row justify-content-center">
                                <Link to={'/order'}><i className="bi bi-cart2 cart" /></Link>
                                <i className="bi bi-bell bell" />
                                <i className="bi bi-envelope envelope" />
                                <Link to={'/profile'}><i className="bi bi-person-circle profile" /></Link>
                                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default LoginNavbar