import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <a href="#" className="navbar-brand title-gradient">TechZone</a>

                <ul className="navbar-links">
                    <li><a href="#" className="nav-link">Inicio</a></li>
                    <li><a href="#" className="nav-link">Celulares</a></li>
                    <li><a href="#" className="nav-link">Tablets</a></li>
                    <li><a href="#" className="nav-link">Notebooks</a></li>
                </ul>

                <CartWidget />
            </div>
        </nav>
    );
}

export default NavBar;
