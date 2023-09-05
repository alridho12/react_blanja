import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAddressDelete({id_address}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
 let handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`${process.env.REACT_APP_API_KEY}/address/${id_address}`)
            .then((res) => {
                console.log(res);
                alert("Address deleted");
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
            <Button variant="danger" className='mt-n4'  onClick={handleShow}>
                X
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Address</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <h3>Are you sure delete this Address?</h3>
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

export default ModalAddressDelete;