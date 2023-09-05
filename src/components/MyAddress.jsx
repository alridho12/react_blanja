import React, { useEffect, useState } from 'react'
import ModalAddress from './ModalAddress'
import ModalAddressUpdate from './ModalAddressUpdate'
import axios from 'axios';
import ModalAddressDelete from './ModalAddressDelete';

const MyAddress = () => {
    const idUser = localStorage.getItem('id');
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/address/customer/${idUser}`)
            .then((res) => {
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [idUser])
    return (
        <div>
            <div className="mt-3 container" id='product'>
                <div>
                    <h5 className='pt-4'>Choose another address</h5>
                    <span className='pt-0'>Manage your Shipping address</span>
                </div>
                <hr className="mt-1" />
                <div className="d-flex justify-content-center">
                    <ModalAddress />
                </div>
                {data?.map((address) => (
                    <div key={address.id_address} className='my-3 p-2' style={{ border: "2px black solid", borderRadius: 5 }}>
                        <div className=' d-flex justify-content-between align-items-center'>
                        <p style={{ color: "black" }}>{address.recepient_name}</p>
                        <ModalAddressDelete id_address={address.id_address}/>
                        </div>
                        <span>{address.address}, {address.city_district}, {address.postal_code} [{address.address_as}]</span>
                        <ModalAddressUpdate id_address={address.id_address} address_as={address.address_as} recepient_name={address.recepient_name} city_district={address.city_district} address={address.address} recepient_telephone={address.recepient_telephone} postal_code={address.postal_code} id_customer={address.id_customer} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAddress