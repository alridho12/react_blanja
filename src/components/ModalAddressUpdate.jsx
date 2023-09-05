import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAddressUpdate({id_address, address_as, recepient_name, city_district, address, recepient_telephone, postal_code, id_customer}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const idUser = localStorage.getItem("id")
    const [data, setData] = useState({
        address_as,
        recepient_name,
        city_district,
        address,
        recepient_telephone,
        postal_code,
        id_customer
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`${process.env.REACT_APP_API_KEY}/address/${id_address}`, data)
            .then((res) => {
                console.log(res);
                alert('address updated')
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div>
            <Button variant='text-danger' onClick={handleShow} className='mt-3 btn-outline-danger font-weight-bolder'>
                Change address
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title><h2>Change Address</h2></Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <input
                            className='form-control mt-3'
                            type='hidden'
                            name='id_customer'
                            value={data.id_customer = idUser}
                            onChange={handleChange}
                        />
                        <div>
                            <label className=' mb-n1'><p>Save address as(ex:home,office)</p></label>
                            <br />
                            <input name='address_as' value={data.address_as} onChange={handleChange} className='form-control' type="text" placeholder='Home' id="i-a" />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Recepient's name</p></label>
                            <br />
                            <input name='recepient_name' value={data.recepient_name} onChange={handleChange} className='form-control' type="text" placeholder='' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Addres</p></label>
                            <br />
                            <input name='address' value={data.address} onChange={handleChange} className='form-control' type="text" placeholder='' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>City or subdistrict</p></label>
                            <br />
                            <input name='city_district' value={data.city_district} onChange={handleChange} className='form-control' type="text" placeholder='' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Recepient's telephone number</p></label>
                            <br />
                            <input name='recepient_telephone' value={data.recepient_telephone} onChange={handleChange} className='form-control' type="text" placeholder='' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Postal code</p></label>
                            <br />
                            <input name='postal_code' value={data.postal_code} onChange={handleChange} className='form-control' type="text" placeholder='' />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" type='submit'>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default ModalAddressUpdate;