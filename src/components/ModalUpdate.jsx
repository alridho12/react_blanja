import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalUpdate({ product_id, product_name, brand, price, color, size, stock, rating, category_id,}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [data, setData] = useState({
        product_name,
        brand,
        price,
        color,
        size,
        stock,
        rating,
        category_id
    })
    let [image, setImage] = useState(null)

    let handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    }

    let handleUpload = (e) => {
        setImage(e.target.files[0]);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product_name", data.product_name);
        formData.append("brand", data.brand);
        formData.append("price", data.price);
        formData.append("color", data.color);
        formData.append("size", data.size);
        formData.append("stock", data.stock);
        formData.append("rating", data.rating);
        formData.append("category_id", data.category_id);
        formData.append("image", image);
        axios.put(`http://localhost:3000/products/${product_id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((res) => {
                console.log(res);
                alert("Product updated");
                setShow(false);
                window.location.reload();
            })
            .catch((err) => {
                alert(err);
                setShow(false);
            });
        

    }

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Update
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <input
                            className='form-control mt-3'
                            type='text'
                            name='product_name'
                            placeholder='Product name'
                            value={data.product_name}
                            onChange={handleChange}
                        />
                        <input
                            className='form-control mt-3'
                            type='text'
                            name='brand'
                            placeholder='Brand'
                            value={data.brand}
                            onChange={handleChange}
                        />
                        <input
                            className='form-control mt-3'
                            type='text'
                            name='price'
                            placeholder='Price'
                            value={data.price}
                            onChange={handleChange}
                        />
                        <input
                            className='form-control mt-3'
                            type='text'
                            name='color'
                            placeholder='Color'
                            value={data.color}
                            onChange={handleChange}
                        />
                        <input
                            className='form-control mt-3'
                            type='text'
                            name='size'
                            placeholder='Size'
                            value={data.size}
                            onChange={handleChange}
                        />
                        <input
                            className='form-control mt-3'
                            type='text'
                            name='stock'
                            placeholder='Stock'
                            value={data.stock}
                            onChange={handleChange}
                        />
                        <input
                            className='form-control mt-3'
                            type='file'
                            name='image'
                            placeholder='Image'
                            value={data.image}
                            onChange={handleUpload}
                        />
                        <input
                            className='form-control mt-3'
                            type='text'
                            name='rating'
                            placeholder='Rating'
                            value={data.rating}
                            onChange={handleChange}
                        />
                        <input
                            className='form-control mt-3'
                            type='text'
                            name='category_id'
                            placeholder='Category'
                            value={data.category_id}
                            onChange={handleChange}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type='submit' className='btn btn-primary'>
                            Update
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalUpdate;