/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.png';
import User from '../../assets/user.png';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="">
                <img src={Logo} alt="logo movie app"/>
                </a>
                
            </div>
            <div className="header--user">
           <a href="">
           <img src={User} alt="User movie app"/>
           </a>
            </div>
        </header>
    )
}