import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyProfile = () => {
    const idUser = localStorage.getItem('id');
    const [profile, setProfile] = useState({
        fullname: '',
        phone_number: '',
        gender: '',
        birth: ''
    });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_KEY}/users/${idUser}`)
            .then((res) => {
                const { fullname, phone_number, gender, birth, photo_profile } = res.data.data[0];
                setProfile({
                    fullname,
                    phone_number,
                    gender,
                    birth,
                    photo_profile
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [idUser]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', profile.fullname);
        formData.append('phone_number', profile.phone_number);
        formData.append('gender', profile.gender);
        formData.append('birth', profile.birth);
        if (imageFile) {
            formData.append('photo_profile', imageFile);
        }

        try {
            await axios.put(`${process.env.REACT_APP_API_KEY}/users/${idUser}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("Profile updated");
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div className="mt-3 container" id='product'>
                <div>
                    <h5 className='pt-4'>My Profile</h5>
                    <span className='pt-0'>Manage your profile information</span>
                </div>
                <hr className="mt-1" />
                <form onSubmit={handleSubmit}>
                    <div className="row m-0">
                        <div className='col-md-9 col-8' style={{borderRight:'1px #9b9b9b50 solid'}}>
                            <label className='container row d-flex justify-content-between align-items-center'>
                                <p>Name</p>
                                <input
                                    id='profile-input'
                                    type='text'
                                    name='fullname'
                                    value={profile.fullname}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label className='container row d-flex justify-content-between align-items-center'>
                                <p>Phone number</p>
                                <input
                                    id='profile-input'
                                    type='text'
                                    name='phone_number'
                                    value={profile.phone_number}
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label className='container row d-flex align-items-center'>
                                <p style={{ marginRight: "65px" }}>Gender</p>
                                <div className='row m-0 d-flex justify-content-center align-items-center'>
                                    <input
                                        type="radio"
                                        style={{
                                            width: "18px",
                                            height: "18px",
                                            border: "2px solid #000",
                                            marginRight: "8px",
                                        }}
                                        name="gender"
                                        value="Men"
                                        checked={profile.gender === "Men"}
                                        onChange={handleInputChange}
                                    />
                                    <p className='mr-3'>Men</p>
                                    <input
                                        type="radio"
                                        style={{
                                            width: "18px",
                                            height: "18px",
                                            border: "2px solid #000",
                                            marginRight: "8px",
                                        }}
                                        name="gender"
                                        value="Women"
                                        checked={profile.gender === "Women"}
                                        onChange={handleInputChange}
                                    />
                                    <p>Women</p>
                                </div>
                            </label>
                            <label className='container row d-flex justify-content-between align-items-center'>
                                <p>Date of birth</p>
                                <input
                                    id='profile-input'
                                    type='date'
                                    name='birth'
                                    value={profile.birth}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </div>
                        <div className='col-md-3 col-4 d-flex justify-content-start align-items-center flex-column'>
                            {profile.photo_profile ? (
                                <img src={profile.photo_profile} id='profile-photo' alt='profile' />
                            ) : (
                                <i
                                    id='side-photo'
                                    className="bi bi-person-circle"
                                />
                            )}
                            <label className=' m-n3' htmlFor='fileInput'>
                                <p>Change picture</p>
                            </label>
                            <input
                                id='fileInput'
                                style={{ display: 'none' }}
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-danger my-4 w-50' type="submit">
                            Update profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MyProfile;