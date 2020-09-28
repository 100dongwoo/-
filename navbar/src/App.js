import React, { useState } from 'react';
import './style.css';

function App() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <i className="fab fa-accusoft"></i>
                <a href="">DreamCording</a>
            </div>
            <ul
                className="navbar_menu"
                style={{ display: toggle ? 'none' : 'flex' }}
            >
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Gallery</a>
                </li>
                <li>
                    <a href="">Wedding</a>
                </li>
                <li>
                    <a href="">FAQ</a>
                </li>
                <li>
                    <a href="">Booking</a>
                </li>
            </ul>
            <ui
                className="navbar_links"
                style={{ display: toggle ? 'none' : 'flex' }}
            >
                <li>
                    <i className="fab fa-twitter"></i>
                </li>
                <li>
                    <i className="fab fa-github-alt"></i>
                </li>
            </ui>
            <a
                href="#"
                className="navbar_toggoleBtn"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <i className="fas fa-bars"></i>
            </a>
        </nav>
    );
}

export default App;
