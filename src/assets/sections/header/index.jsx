import React from "react";
import Aos from "aos";
import './header.css'
import HeaderL from '../../Images/HeaderLogo.png'
import HeaderLT from '../../Images/header-logo-text.png'

const index = () => {

    Aos.init()

    return (
        <>

            <div class="main d-flex">
                <div class="container">
                    <header>
                        <div class="header-inner d-flex align-items-center justify-content-between col-lg-auto">
                            {/* Header Logo */}
                            <div class="header-logo-box d-flex align-items-center py-4" data-aos="fade-right">
                                <a class="logo-link text-decoration-none col-4 d-flex" href="#">
                                    <img class="header-logo me-2 img-fluid" src={HeaderL} />
                                    <img class="header-logo-text mb-2 img-fluid" src={HeaderLT} />
                                </a>
                            </div>
                            {/* Navbar  */}

                            <nav class="navbar navbar-expand-xl">
                                <div class="container-fluid">
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav gap-5">
                                            <li class="nav-item">
                                                <a class="nav-link active text-light" aria-current="page" href="#">ABOUT</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-light" href="#">SERVICES</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-light" href="#">TECHNOLOGIES</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-light" href="#">HOW TO</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            {/* Header Button  */}
                            <div class="header-button-box d-none d-lg-block gap-2">
                                <button class="header-button1 me-3 fw-bold text-light">CONTACT US</button>
                                <button class="header-button2 fw-bold text-light">JOIN HYDRA</button>
                            </div>
                        </div>

                    </header>
                </div>
            </div>
        </>

    )

}

export default index;