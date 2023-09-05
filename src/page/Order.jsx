import React, { useEffect, useState } from 'react'
import '../assets/style/Order.css'
import LoginNavbar from '../components/LoginNavbar'
import quant from "../assets/image/Group 1173.png"
import Footer from '../components/Footer'
import axios from 'axios'
import { FormatRupiah } from '@arismun/format-rupiah';
import { Link } from 'react-router-dom'


const Order = () => {
    const idUser = localStorage.getItem("id")
    const [product, setProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_KEY}/orders/users/${idUser}`)
            .then((res) => {
                setProduct(res.data.data);
                const initialTotalPrice = res.data.data.reduce((acc, item) => {
                    return acc + (item.price * item.quantity);
                }, 0);
                setTotalPrice(initialTotalPrice);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [idUser]);

    const handleCheckboxChange = (id_order, price) => {
        if (selectedItems.includes(id_order)) {
            console.log("Unchecked:", id_order, price);
            setSelectedItems(selectedItems.filter(item => item !== id_order));
            setTotalPrice(totalPrice - price);
        } else {
            console.log("Checked:", id_order, price);
            setSelectedItems([...selectedItems, id_order]);
            setTotalPrice(totalPrice + price);
        }
    };

    const handleSelectAllChange = () => {
        if (selectAll) {
            setSelectedItems([]);
        } else {
            const allItemIds = product.map(item => item.id_order);
            setSelectedItems(allItemIds);
        }
        setSelectAll(!selectAll); 
    };

    const handleDelete = (id_order) => {
        axios
            .delete(`${process.env.REACT_APP_API_KEY}/orders/${id_order}`)
            .then((res) => {
                setProduct(product.filter((item) => item.id_order !== id_order));
                window.location.reload();
                if (selectedItems.includes(id_order)) {
                    const item = product.find((item) => item.id_order === id_order);
                    setTotalPrice(totalPrice - item.price * item.quantity);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        const newTotalPrice = product.reduce((acc, item) => {
            if (selectedItems.includes(item.id_order)) {
                return acc + item.price * item.quantity;
            }
            return acc;
        }, 0);

        setTotalPrice(newTotalPrice);
    }, [selectedItems, product]);


    return (
        <>
            <LoginNavbar />
            <main>
                <section>
                    <div className="container" id='orders'>
                        <h1 className="mt-md-5 my-3"> My bag</h1>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="border rounded align-items-center row" id='selek'>
                                    <div className="p-3 col-md-1 col-2">
                                        <input
                                            className="checkbox"
                                            type="checkbox"
                                            name="checkbox"
                                            checked={selectAll}
                                            onChange={handleSelectAllChange}
                                        />
                                    </div>
                                    <div className="col-md-8 col-6">
                                        <h5>
                                            Select all items<span> ({selectedItems.length} items selected)</span>
                                        </h5>
                                    </div>
                                    <div className="p-3 col-md-3 col-4 d-flex justify-content-center">
                                        <button 
                                        type="button" 
                                        className="delete"
                                        onClick={() => handleDelete(selectedItems)} 
                                        style={{ fontSize: '20px', fontWeight: '500' }}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                {product.map((product) => (
                                    <div className="mt-3 border rounded row align-items-center row" id='prd'>
                                        <div className="p-3 col-md-1 col-2 ">
                                            <input
                                                className="checkbox"
                                                type="checkbox"
                                                name="checkbox"
                                                checked={selectedItems.includes(product.id_order)}
                                                onChange={() => handleCheckboxChange(product.id_order, product.price)}
                                            />
                                        </div>
                                        <div className="row m-0 p-0 col-md-6 col-6 align-items-center">
                                            <img
                                                className="col-md-4 col-4 "
                                                src={product.image}
                                                alt="product"
                                                id='product-img'
                                            />
                                            <div className="col-md-8 col-8 ">
                                                <p style={{ color: 'black' }}>
                                                    {product.product_name}
                                                    <br />
                                                    <span>{product.brand}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-4 m-0 row d-flex align-items-md-center">
                                            <img
                                                src={quant}
                                                alt="total"
                                                className="total col-md-6"
                                            />
                                            <p className="price col-md-4" style={{color:"black"}}><FormatRupiah value={product.price * (product.quantity)} /></p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-4">
                                <div className="my-3 mt-md-0 border rounded align-items-center summary">
                                    <div className="col-md-12">
                                        <p>Shopping summary</p>
                                    </div>
                                    <div className="col-md-12 row d-flex justify-content-md-between align-items-center">
                                        <span className="">Total price</span>
                                        <p className="" style={{color:"black"}}><FormatRupiah value={totalPrice} /></p>
                                    </div>
                                    <div className="text-center col-md-12 d-flex pb-3">
                                        <Link to={"/CheckOut"}>
                                        <button className="buy">Buy</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>

    )
}

export default Order