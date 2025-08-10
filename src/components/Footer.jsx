import React from 'react';

function Footer() {
    return (
        <footer className="pt-80px pb-50px box-dark">
            <div className="call-action-style2">
                <div className="main-marq lg-text text-uppercase">
                    <div className="slide-har st1">
                        <div className="box">
                            <div className="item-marq"><h2>SOWA</h2></div>
                            <div className="item-marq"><h2>David</h2></div>
                            <div className="item-marq"><h2>Olalekou</h2></div>
                        </div>
                        <div className="box">
                            <div className="item-marq"><h2>SOWA</h2></div>
                            <div className="item-marq"><h2>David</h2></div>
                            <div className="item-marq"><h2>Olalekou</h2></div>
                        </div>
                    </div>
                </div>
                <a href="/contact" className="butn-call">
                    <img src="assets/imgs/arrow-top-right-dark.svg" alt="" className="w-50px" />
                </a>
            </div>

            <div className="container mt-80px">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="social-icon-circle">
                            <a href="#"><i className="fab fa-x-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item">
                            <h6 className="mb-30px">Lomé, Togo</h6>
                            <p className="fs-14 mb-5px">Agoè-sogbossito</p>
                            <p className="fs-14 mb-5px">daviosowa9@gmail.com</p>
                            <p className="fs-14">(+228) 98 64 71 61 / 91 76 54 31</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
