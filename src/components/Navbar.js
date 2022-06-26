import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo.svg';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <header>
            <nav className='navbar'>
                <div className="logo">
                    <Link to='/'><img className="App-logo" src={Logo} alt="logo" /></Link>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={handleClick}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pricing' className='nav-link' onClick={handleClick}>Pricing</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/faq' className='nav-link' onClick={handleClick}>FAQ</Link>
                    </li>
                    <li className='nav-item' onClick={handleClick}>
                        <Link to='/contact' className='nav-link'>Contact</Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars size={20} style={{ color: '#ffffff' }} />)}

                </div>
            </nav>
        </header>
    )
};

export default Navbar;