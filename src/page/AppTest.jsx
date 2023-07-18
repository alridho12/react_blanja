import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ModalCreate from '../components/ModalCreate'
import ModalUpdate from '../components/ModalUpdate'
import ModalDelete from '../components/ModalDelete'

const AppTest = () => {
    let [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((res) => {
                setProducts(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])
    return (
        <div className='container m-4'>
            <ModalCreate />
            <table class='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Brand</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Color</th>
                        <th scope='col'>Size</th>
                        <th scope='col'>Stock</th>
                        <th scope='col'>Image</th>
                        <th scope='col'>Rating</th>
                        {/* <th scope='col'>Category</th> */}
                        <th scope='col'>action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr>
                            <th>{product.product_id}</th>
                            <td>{product.product_name}</td>
                            <td>{product.brand}</td>
                            <td>{product.price}</td>
                            <td>{product.color}</td>
                            <td>{product.size}</td>
                            <td>{product.stock}</td>
                            <td><img src={product.image} crossOrigin="anonymous" alt='product' /></td>
                            <td>{product.rating}</td>
                            {/* <td>{product.category_id}</td> */}
                            <td>
                                <ModalUpdate product_id={product.product_id} product_name={product.product_name} brand={product.brand} price={product.price}
                                    color={product.color} size={product.size} stock={product.stock} rating={product.rating} category_id={product.category_id}>
                                    Update
                                </ModalUpdate>
                                <ModalDelete product_id={product.product_id}>Delete</ModalDelete>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AppTest