import React, { useEffect, useState } from 'react'
import ModalUpdate from './ModalUpdate'
import ModalDelete from './ModalDelete'
import ModalCreate from './ModalCreate'
import Pagination  from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import getProductAction from '../config/redux/action/getProductsAction'


const MyProduct = () => {
    const dispatch = useDispatch()
    const {product} = useSelector((state)=>state.product)
    const [search, setSearch] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage,setpostsPerpage] = useState(5);

    useEffect(() => {
        dispatch(getProductAction())
        // axios.get('http://localhost:3000/products')
        //     .then((res) => {
        //         setProducts(res.data.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }, []);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = product.slice(firstPostIndex,lastPostIndex)

    return (
        <div>
            <div className="mt-3 container" id='product'>
                <div>
                    <h5 className='pt-4'>Product</h5>
                    <span className='pt-0'>Manage your product</span>
                </div>
                <hr className="mt-1" />
                <div className=" container">
                    <ModalCreate />
                    <input className='form-control mt-1 mb-1' type='text' placeholder='search' onChange={(e) => setSearch(e.target.value)}>
                    </input>
                    <table className='table'>
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
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPosts.filter((product) => {
                                return search.toLowerCase() === '' ? product : product.product_name.toLowerCase().includes(search);
                            })
                                .map((product) => (
                                    <tr key={product.product_id}>
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
                                
                                <Pagination 
                            totalPosts={product.length} 
                            postPerPage={postPerPage} 
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}/>
                                
                        </tbody>
                        <tfoot className='bg-da'>
                            
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyProduct