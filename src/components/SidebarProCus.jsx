import React from 'react'
import profile from "../assets/image/user 1.svg"
import shipping from "../assets/image/map-pin (3) 1.svg"
import produk from "../assets/image/clipboard 1.svg"
import { Link, useLocation } from 'react-router-dom';
import LiteProfile from './LiteProfile'

const SidebarProCus = () => {
    const location = useLocation();
    return (
        <div>
            <LiteProfile />
            <div className="mt-5">
                <div className="row m-0">
                    <div>
                        <img
                            style={{
                                border: 50,
                                backgroundColor: "#456BF3",
                                width: 40,
                                height: 40,
                                borderRadius: 50
                            }}
                            src={profile}
                            alt=""
                        />
                    </div>
                    <div className=" d-flex align-items-center ml-3">
                        <Link className={location.pathname === "/profile" ? 'active text-danger' : ''} style={{ fontWeight: 600 }} to={"/profile"}>
                            My account
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row m-0">
                    <div>
                        <img
                            style={{
                                border: 50,
                                backgroundColor: "#f36f45",
                                width: 40,
                                height: 40,
                                borderRadius: 50
                            }}
                            src={shipping}
                            alt=""
                        />
                    </div>
                    <div className=" d-flex align-items-center ml-3">
                        <Link className={location.pathname === "/address" ? 'active text-danger' : ''} style={{ fontWeight: 600 }} to={"/address"}>
                            Shipping address
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="row m-0 mb-5">
                    <div>
                        <img
                            style={{
                                border: 50,
                                backgroundColor: "#f3456f",
                                width: 40,
                                height: 40,
                                borderRadius: 50
                            }}
                            src={produk}
                            alt=""
                        />
                    </div>
                    <div className=" d-flex align-items-center ml-3">
                        <Link className={location.pathname === "/myorder" ? 'active text-danger' : ''} style={{ fontWeight: 600 }} to={"/myorder"}>
                            My order
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarProCus