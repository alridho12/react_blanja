import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalDelete({product_id}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
 let handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`${process.env.REACT_APP_API_KEY}/products/${product_id}`)
            .then((res) => {
                console.log(res);
                alert("Product deleted");
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
            <Button className='mt-3' variant="danger" onClick={handleShow}>
                Delete
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Product</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <h3>Are you sure delete this product?</h3>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' variant='danger'>
                            Delete
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default ModalDelete;