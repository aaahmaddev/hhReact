import React from "react";
import './hero.css'
import HeroImg from '../../Images/HeroImg.png'
import ArrowSR from '../../Images/arrow-small-right.png'
import LocIcon from '../../Images/LocationIcon.png'
import CallImg from '../../Images/phone-call.png'
import MailImg from '../../Images/mail.png'



const index = () => {
    return (

        <>

            <div className="main d-flex">
                <div className="container">

                    <section className="hero mt-5">
                        <div className="hero-inner">
                            {/* TOP  */}
                            <div className="hero-top d-flex align-items-center justify-content-between flex-wrap">

                                <div
                                    className="hero-top-right col-lg-6 col-12 d-flex d-lg-none align-items-center justify-content-lg-end justify-content-center" >
                                    <img data-aos="fade-down-left" className="hero-img img-fluid" src={HeroImg} />
                                </div>


                                <div className="hero-top-left col-lg-6 col-12 text-center text-lg-start mt-5 mt-lg-0" data-aos="fade-down-right">
                                    <h1 className="hero-top-left-title col-12 col-lg-10 fw-bold text-light">
                                        <span className="hero-title-span">Dive</span> Into The Depths
                                        Of <span className="hero-title-span">Virtual Reality</span>
                                    </h1>
                                    <p className="hero-top-left-text col-9 d-lg-block d-none fw-medium text-light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        nisl tincidunt eget. Lectus mauris eros in vitae.
                                    </p>

                                    <div
                                        className="hero-buttons-box d-flex align-items-center justify-content-lg-start justify-content-center">
                                        <button className="hero-button1 fw-bolder">
                                            BUILD YOUR WORLD
                                        </button>

                                        <div className="hero-arrow d-lg-block d-none">
                                            <img src={ArrowSR} />
                                        </div>

                                    </div>

                                </div>

                                <div data-aos="fade-down-left" className="hero-top-right col-lg-6 col-12 d-none d-lg-flex align-items-center justify-content-lg-end justify-content-center">
                                    <img className="hero-img img-fluid" src={HeroImg} />
                                </div>
                            </div>
                            {/* Bottom  */}
                            <div className="hero-bottom d-lg-block d-none">
                                <div className="hero-bottom-inner d-flex align-items-center justify-content-around">
                                    <div
                                        className="location-box d-flex align-items-center col-12 col-lg-auto justify-content-center justify-content-lg-start">
                                        <img src={LocIcon} />
                                        <div className="location-text ms-2">
                                            <h4 className="m-0 location-top-text text-light">Pay Us a Visit</h4>
                                            <a className="location-bottom-text m-0 text-decoration-none text-light"
                                                href="https://maps.app.goo.gl/jWvwsZpTdbuM75xcA">Union St, Seattle, WA 98101,
                                                United States</a>
                                        </div>
                                    </div>
                                    <div className="hero-bottom-line d-none d-lg-block">

                                    </div>

                                    <div className="call-box d-lg-flex align-items-center d-none">
                                        <img src={CallImg} />
                                        <div className="call-text ms-2">
                                            <h4 className="m-0 call-top-text text-light">Give Us a Call</h4>
                                            <a href="tel:+11011111010" className="call-bottom-text text-decoration-none mt-3 text-light">(110)
                                                1111-1010</a>
                                        </div>
                                    </div>

                                    <div className="hero-bottom-line d-none d-lg-block">

                                    </div>

                                    <div className="email-box d-lg-flex align-items-center p-3 ps-0 d-none">
                                        <img src={MailImg} />
                                        <div className="email-text ms-2">
                                            <h4 className="m-0 email-top-text text-light">Send Us a Message</h4>
                                            <a className="email-bottom-text m-0 text-decoration-none text-light" target="_blank" href="https://mail.google.com">Contact@HydraVTech.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Response bottom */}


                            <div id="carouselExampleControls" className="carousel slide d-flex d-lg-none mt-4" data-bs-ride="carousel">
                                <div className="carousel-inner d-flex align-items-center">
                                    <div className="carousel-item active">
                                        <div className="location-box d-flex align-items-center justify-content-center">
                                            <img src={LocIcon} />
                                            <div className="location-text ms-2">
                                                <a className="location-bottom-text m-0 text-decoration-none text-light" target="_blank" href="mailto:sardorbek.tursunov.official@gmail.com">Union St, Seattle, <br /> WA 98101,
                                                    United States</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="call-box d-flex align-items-center justify-content-center">
                                            <img src={CallImg} />
                                            <div className="call-text ms-2">
                                                <a href="tel:+11011111010" className="call-bottom-text text-decoration-none mt-3 text-light">(110)
                                                    1111-1010</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="email-box d-flex align-items-center justify-content-center">
                                            <img className="mail-icon" src={MailImg} />
                                            <div className="email-text ms-2">

                                                <a className="email-bottom-text m-0 text-decoration-none text-light" href="mailto:contact@hydravtech.com text-light">Contact@HydraVTech.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>
                    </section>

                </div>
            </div>

        </>

    )
}
export default index;