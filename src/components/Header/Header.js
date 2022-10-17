import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../contexts/UserContext';

import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='sticky top-0 z-50'>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {user?.uid ? <Link onClick={logOut} to="/">Sign Out</Link>
                        : <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Sign Up</Link>
                        </>
                    }

                    <span className='text-white'>{user?.email}</span>
                </div>
            </nav>

        </div>
    );
};

export default Header;