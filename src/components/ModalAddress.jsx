import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAddress() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="outline-light" onClick={handleShow} id='b-add'>
                <p>Add new address</p>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title><h2>Add new address</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label className=' mb-n1'><p>Save address as(ex:home,office)</p></label>
                            <br />
                            <input className='form-control' type="text" placeholder='Home' id="i-a" />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Recepient's name</p></label>
                            <br />
                            <input className='form-control' type="text" placeholder='' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Addres</p></label>
                            <br />
                            <input className='form-control' type="text" placeholder='' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>City or subdistrict</p></label>
                            <br />
                            <input className='form-control' type="text" placeholder='' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Recepient's telephone number</p></label>
                            <br />
                            <input className='form-control' type="text" placeholder='' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Postal code</p></label>
                            <br />
                            <input className='form-control' type="text" placeholder='' />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalAddress;