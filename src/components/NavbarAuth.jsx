import React, { useEffect, useState } from 'react'
import NavbarHomePublic from './NavbarHomePublic';
import LoginNavbar from './LoginNavbar';


const NavbarAuth = () => {
    const [login, setLogin] = useState(false); 

    useEffect(() => {
        const id = localStorage.getItem('id');
        setLogin(id !== null);
    }, []); 

    if (login) {
        return <LoginNavbar />;
    }

    return <NavbarHomePublic />;
};

export default NavbarAuth