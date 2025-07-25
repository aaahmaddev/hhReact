import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'; // Make sure AOS styles are included
import './header.css';
import HeaderL from '../../Images/HeaderLogo.png';
import HeaderLT from '../../Images/header-logo-text.png';

const Header = () => {

    useEffect(() => {
        Aos.init(); // Initialize AOS animation once component mounts
    }, []);

    return (
        <div className="main d-flex">
            <div className="container">
                <header>
                    <nav className="navbar navbar-expand-xl navbar-dark bg-transparent">
                        <div className="container-fluid">
                            {/* Logo */}
                            <div className="header-inner d-flex align-items-center justify-content-between">

                                <a className="navbar-brand d-flex align-items-center" href="#">
                                    <img src={HeaderL} alt="Logo" className="me-2" height="80" />
                                    <img src={HeaderLT} alt="Logo Text" height="50" />
                                </a>

                                {/* Toggle Button for mobile */}
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                            </div>

                            {/* Collapsible part */}
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav gap-3 text-center">
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" href="#">ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" href="#">SERVICES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" href="#">TECHNOLOGIES</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link fw-bold" href="#">HOW TO</a>
                                    </li>
                                </ul>

                                {/* Action buttons */}
                                <div className="d-flex d-xl-none flex-column flex-xl-row gap-2 ms-xl-4 mt-3 mt-xl-0">
                                    <button className="header-button1 me-3 fw-bold text-light">CONTACT US</button>
                                    <button className="header-button2 fw-bold text-light">JOIN HYDRA</button>
                                </div>
                            </div>

                            <div>
                                <div className="d-none d-xl-flex flex-column flex-xl-row gap-2 ms-xl-4 mt-3 mt-xl-0">
                                    <button className="header-button1 me-3 fw-bold text-light">CONTACT US</button>
                                    <button className="header-button2 fw-bold text-light">JOIN HYDRA</button>
                                </div>
                            </div>

                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Header;
