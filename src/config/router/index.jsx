import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../page/Home'
import Login from '../../page/Login'
import Signup from '../../page/Signup'
import Page404 from '../../page/Page404'
import CheckOut from '../../page/CheckOut'
import Order from '../../page/Order'
import DetailProduct from '../../page/DetailProduct'
import Profile from '../../page/Profile'
import AppTest from '../../page/AppTest'
import TestDetail from '../../page/TestDetail'
import ShippingAddres from '../../page/ShippingAddress'
import ProductSeller from '../../page/ProductSeller'
import RequireAuth from '../../page/RequireAuth'
import MyOrders from '../../page/MyOrders'

const Router = () => {
    return (
        <div>
            <BrowserRouter >
                <Routes>
                    <Route path='/checkOut' element={<RequireAuth><CheckOut /></RequireAuth>}></Route>
                    <Route path='/home' element={<Home />}></Route>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<Signup />}></Route>
                    <Route path='/order' element={<RequireAuth><Order /></RequireAuth>}></Route>
                    <Route path='/detailProduct/:product_id' element={<DetailProduct />}></Route>
                    <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>}></Route>
                    <Route path='/address' element={<ShippingAddres />}></Route>
                    <Route path='/crud' element={<ProductSeller />}></Route>
                    <Route path='myorder' element={<MyOrders />}></Route>
                    <Route path='/*' element={<Page404 />}></Route>
                    <Route path='/test' element={<AppTest />}></Route>
                    <Route path='/products/:product_id' element={<TestDetail />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router