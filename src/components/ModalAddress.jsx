import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAddress() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const idUser = localStorage.getItem("id")
    const [data, setData] = useState({
        address_as: "",
        recepient_name: "",
        city_district: "",
        address:"",
        recepient_telephone: "",
        postal_code: "",
        id_customer: ""
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
            .post(`${process.env.REACT_APP_API_KEY}/address`, data)
            .then((res) => {
                console.log(res);
                alert('address added')
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <Button variant="outline-light" onClick={handleShow} id='b-add'>
                <p>Add new address</p>
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title><h2>Add new address</h2></Modal.Title>
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
                            <input name='recepient_name' value={data.recepient_name} onChange={handleChange} className='form-control' type="text" placeholder='Jhon doe' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Addres</p></label>
                            <br />
                            <input name='address' value={data.address} onChange={handleChange} className='form-control' type="text" placeholder='Perumahan Sapphire Mediterania, Wiradadi' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>City or subdistrict</p></label>
                            <br />
                            <input name='city_district' value={data.city_district} onChange={handleChange} className='form-control' type="text" placeholder='Kec. Sokaraja,kab.Banyumas' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Recepient's telephone number</p></label>
                            <br />
                            <input name='recepient_telephone' value={data.recepient_telephone} onChange={handleChange} className='form-control' type="text" placeholder='+628xxxxx' />
                        </div>
                        <div>
                            <label className='mb-n1'><p>Postal code</p></label>
                            <br />
                            <input name='postal_code' value={data.postal_code} onChange={handleChange} className='form-control' type="text" placeholder='53181' />
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

export default ModalAddress;