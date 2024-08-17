import React from 'react'
import "./NavBar.css";
import logo from '../../constants/logo.png'
function NavBar() {
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="Netflix Logo" />
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
        </div>
    )
}

export default NavBar
