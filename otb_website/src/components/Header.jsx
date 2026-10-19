import React from 'react';
import './Header.css';
import logo from '../assets/otb500.gif';


const Header = () => {
    return (
        <header>
            <img className="logo" src={logo} alt="OTB Logo" />
            {/* <h1>OTB Websit´e</h1> */}
            {/* quiero añadir el material icon de google del sol en el boton */}
            {/* <button className="dark_mode">
                <span className="material-icons">wb_sunny</span>
            </button> */}
            <nav className="navigation">PAGE1 | PAGE2 | PAGE3</nav>
            <button className="btn_dark_mode">
            ☀️
            </button>
        </header>
    );
};

export default Header;