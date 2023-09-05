import React, { useEffect, useState } from 'react'
import pen from "../assets/image/Group (1).svg"
import { Link } from 'react-router-dom'
import axios from 'axios'

const LiteProfileSeller = () => {
    const idUser = localStorage.getItem('id');
    const [profiles, setProfile] = useState([]);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/sellers/${idUser}`)
            .then((res) => {
                setProfile(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [idUser])
    return (
        <div>
            {profiles.map((users) => (
                <div className='row d-flex align-items-center'>
                    <div className='ml-3 mt-3' >
                        {users.photo_profile ? (
                            <img src={users.photo_profile} id='photo-profile' alt='profile' />
                        ) : (
                            <i
                                className="bi bi-person-circle profile"
                                style={{ fontSize: 60 }}
                            />
                        )}
                    </div>
                    <div>
                        <p className=" text-center m-0">
                            {users.store_name}
                        </p>
                        <div className="d-flex justify-content-center row m-0">
                            <img className='m-0' src={pen} alt="" />
                            <Link to="/profile">
                                <span style={{ fontWeight: 500 }}> Ubah profile</span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
            <hr />
        </div>
    )
}

export default LiteProfileSeller