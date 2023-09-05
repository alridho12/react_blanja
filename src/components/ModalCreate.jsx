import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreate() {
  // const [image, setImage] = useState(null)
  const [login,setLogin] = useState();

  useEffect(() => {
      const login = localStorage.getItem('id')
      setLogin(login)
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [data, setData] = useState({
    id_seller:"",
    product_name: "",
    brand: "",
    price: "",
    color: "",
    size: "",
    stock: "",
    rating: "",
    category_id: "",
    description: "",
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
    formData.append("description", data.description);
    formData.append("id_seller", data.id_seller);
    formData.append("image", image);
    axios.post(`${process.env.REACT_APP_API_KEY}/products`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res);
        alert("Product created");
        setShow(false)
        window.location.reload();
      })
      .catch((err) => {
        alert(err)
        setShow(false)
      })

  }

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Selling product
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
          <input
              className='form-control mt-3'
              type='hidden'
              name='id_seller'
              value={data.id_seller=login}
              onChange={handleChange}
            />
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
            <textarea
              className='form-control mt-3'
              type='text'
              name='description'
              placeholder='Description'
              value={data.description}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type='submit' variant="danger">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalCreate;