import React from 'react'
import profile from "../assets/image/user 1.svg"
import shipping from "../assets/image/map-pin (3) 1.svg"
import produk from "../assets/image/clipboard 1.svg"
import { Link } from 'react-router-dom'

const SidebarProSell = () => {
    return (
        <div>
            <div className=" row">
                <div className="d-flex justify-content-center align-items-center pl-4">
                    <i
                        className="bi bi-person-circle profile"
                        style={{ fontSize: 60 }}
                    />
                </div>
                <div>
                    <p className=" m-0" style={{ textAlign: "center" }}>
                        Profile
                    </p>
                    <div className="d-flex justify-content-center row m-0">
                        <img src="../assets/image/Group (1).svg" alt="" />
                        <a href="">
                            <span style={{ fontWeight: 500 }}>Ubah profile</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-5" />
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
                        <Link to={"/profile"}>
                            <span>My account</span>
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
                        <Link to={"/address"}>
                            <span>Shipping address</span>
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
                        <Link to={"/crud"}>
                            <span style={{ color: "#8E8E93" }}>My order</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarProSell