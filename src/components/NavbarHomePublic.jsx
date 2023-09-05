import React from 'react'
import logo from "../assets/image/Group 1158 (2).png"
import search from "../assets/image/Search Glyph.png"
import filter from "../assets/image/filter 1.png"
// import cart from "../assets/image/shopping-cart (2) 1.png"
import { Link } from 'react-router-dom'

const NavbarHomePublic = () => {
    return (
        <div >
            <header className='product'>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <img
                            className="logo mr-md-4"
                            src={logo}
                            alt="logo"
                        />
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
                                            id="input"
                                            className="form-control mr-2"
                                            type="search "
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <img
                                            className="logosearch"
                                            src={search}
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
                                {/* <img
                                className="mr-4"
                                src={cart}
                                alt="cart"
                            /> */}
                                <button className="btn btn-danger rounded-pill mr-2">
                                    <Link to={"/Login"}>Login</Link>
                                </button>
                                <button className="btn border rounded-pill">
                                    <Link to={"/SignUp"}>Signup</Link>
                                </button>
                            </form>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default NavbarHomePublic