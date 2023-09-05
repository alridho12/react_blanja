import React, { useEffect, useState } from 'react'
import ModalUpdate from './ModalUpdate'
import ModalDelete from './ModalDelete'
import ModalCreate from './ModalCreate'
import Pagination from './Pagination'
import { useDispatch, useSelector } from 'react-redux'
import getProductAction from '../config/redux/action/getProductsAction'


const MyProduct = () => {
    const dispatch = useDispatch()
    const { product } = useSelector((state) => state.product)
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setpostsPerpage] = useState(5);

    useEffect(() => {
        dispatch(getProductAction())
    }, [dispatch]);

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = product ? product.slice(
        (currentPage - 1) * postPerPage,
        currentPage * postPerPage
      ) : [];

    return (
        <div>
            <div className="mt-3 container" id='product'>
                <div>
                    <h5 className='pt-4'>Product</h5>
                    <span className='pt-0'>Manage your product</span>
                </div>
                <hr className="mt-1" />
                <div className=" container">
                    <input className='form-control mt-1 mb-3' type='text' placeholder='search' onChange={(e) => setSearch(e.target.value)}>
                    </input>
                    <ModalCreate />
                    <table className='table table-striped table-responsive mt-1'>
                        <thead>
                            <tr>
                                <th className='text-center' scope='col'>Name</th>
                                <th className='text-center' scope='col'>Brand</th>
                                <th className='text-center' scope='col'>Price</th>
                                <th className='text-center' scope='col'>Color</th>
                                <th className='text-center' scope='col'>Size</th>
                                <th className='text-center' scope='col'>Stock</th>
                                <th className='text-center' scope='col'>Image</th>
                                <th className='text-center' scope='col'>Rating</th>
                                {/* <th scope='col'>Category</th> */}
                                <th className='text-center' scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentPosts.filter((product) => {
                                return search.toLowerCase() === '' ? product : product.product_name.toLowerCase().includes(search);
                            })
                                .map((product) => (
                                    <tr key={product.product_id}>
                                        <td className='text-center' >{product.product_name}</td>
                                        <td className='text-center' >{product.brand}</td>
                                        <td className='text-center' >{product.price}</td>
                                        <td className='text-center' >{product.color}</td>
                                        <td className='text-center' >{product.size}</td>
                                        <td className='text-center' >{product.stock}</td>
                                        <td><img src={product.image} crossOrigin="anonymous" alt='product' /></td>
                                        <td className='text-center' >{product.rating}</td>
                                        {/* <td>{product.category_id}</td> */}
                                        <td className='text-center'>
                                            <ModalUpdate product_id={product.product_id} product_name={product.product_name} brand={product.brand} price={product.price}
                                                color={product.color} size={product.size} stock={product.stock} rating={product.rating} category_id={product.category_id}
                                                description={product.description} id_seller={product.id_seller}>
                                                Update
                                            </ModalUpdate>
                                            <ModalDelete product_id={product.product_id}>Delete</ModalDelete>
                                        </td>
                                    </tr>
                                ))}

                            <Pagination
                                totalPosts={product?.length}
                                postPerPage={postPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage} />

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