import React from 'react';

function ContactInfo() {
    return (
        <div className="col-lg-4">
            <div className="info-box full-width md-mb50">
                <h4 className="phone">
                    <a href="#0" className="underline">+228 98 64 71 61</a>
                </h4>
                <div className="morinfo mt-50px pb-30px line-bottom border-color-transparent-white-light">
                    <h6 className="mb-15px fs-16 text-uppercase ls-1px">Adresse</h6>
                    <p>Agoè-sogbossito, Togo</p>
                </div>
                <div className="morinfo mt-30px pb-30px line-bottom border-color-transparent-white-light">
                    <h6 className="mb-15px fs-16 text-uppercase ls-1px">Email</h6>
                    <p>daviosowa9@gmail.com</p>
                </div>

                <div className="social-icon-circle mt-50px">
                    <a href="#"><i className="fab fa-x-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;