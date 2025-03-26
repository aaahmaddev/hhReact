import React from "react";
import './hero.css'
import HeroImg from '../../Images/HeroImg.png'
import ArrowSR from '../../Images/arrow-small-right.png'
import LocIcon from '../../Images/LocationIcon.png'
import LineImg from '../../Images/line.png'
import CallImg from '../../Images/phone-call.png'
import MailImg from '../../Images/mail.png'



const index = () => {
    return (

        <>

            <div class="main d-flex">
                <div class="container">

                    <section class="hero mt-5">
                        <div class="hero-inner">
                             {/* TOP  */}
                            <div class="hero-top d-flex align-items-center justify-content-between flex-wrap">


                                <div
                                    class="hero-top-right col-lg-6 col-12 d-flex d-lg-none align-items-center justify-content-lg-end justify-content-center">
                                    <img class="hero-img img-fluid" src={HeroImg}/>
                                </div>


                                <div class="hero-top-left col-lg-6 col-12 text-center text-lg-start mt-5 mt-lg-0">
                                    <h1 class="hero-top-left-title col-12 col-lg-10 fw-bold text-light">
                                        <span class="hero-title-span">Dive</span> Into The Depths
                                        Of <span class="hero-title-span">Virtual Reality</span>
                                    </h1>
                                    <p class="hero-top-left-text col-9 d-lg-block d-none fw-medium text-light">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore
                                        nisl tincidunt eget. Lectus mauris eros in vitae.
                                    </p>

                                    <div
                                        class="hero-buttons-box d-flex align-items-center justify-content-lg-start justify-content-center">
                                        <button class="hero-button1 fw-bolder">
                                            BUILD YOUR WORLD
                                        </button>

                                        <div class="hero-arrow d-lg-block d-none">
                                            <img src={ArrowSR}/>
                                        </div>

                                    </div>

                                </div>

                                <div
                                    class="hero-top-right col-lg-6 col-12 d-none d-lg-flex align-items-center justify-content-lg-end justify-content-center">
                                    <img class="hero-img img-fluid" src={HeroImg}/>
                                </div>
                            </div>
                             {/* Bottom  */}
                            <div class="hero-bottom mb-3">
                                <div class="hero-bottom-inner d-flex align-items-center justify-content-around">
                                    <div
                                        class="location-box d-flex align-items-center col-12 col-lg-auto justify-content-center justify-content-lg-start">
                                        <img src={LocIcon}/>
                                            <div class="location-text ms-2">
                                                <h4 class="m-0 location-top-text text-light">Pay Us a Visit</h4>
                                                <a class="location-bottom-text m-0 text-decoration-none text-light"
                                                    href="https://maps.app.goo.gl/jWvwsZpTdbuM75xcA">Union St, Seattle, WA 98101,
                                                    United States</a>
                                            </div>
                                    </div>
                                    <div class="hero-bottom-line d-none d-lg-block">
                                        <img class="hero-line" src={LineImg}/>
                                    </div>

                                    <div class="call-box d-lg-flex align-items-center p-2 d-none">
                                        <img src={CallImg}/>
                                            <div class="call-text ms-2">
                                                <h4 class="m-0 call-top-text text-light">Give Us a Call</h4>
                                                <a href="tel:+11011111010" class="call-bottom-text text-decoration-none mt-3 text-light">(110)
                                                    1111-1010</a>
                                            </div>
                                    </div>

                                    <div class="hero-bottom-line d-none d-lg-block">
                                        <img class="hero-line" src={LineImg}/>
                                    </div>

                                    <div class="email-box d-lg-flex align-items-center p-2 d-none">
                                        <img src={MailImg}/>
                                            <div class="email-text ms-2">
                                                <h4 class="m-0 email-top-text text-light">Send Us a Message</h4>
                                                <a class="email-bottom-text m-0 text-decoration-none text-light" href="mailto:contact@hydravtech.com text-light">Contact@HydraVTech.com</a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

        </>

    )
}
export default index;