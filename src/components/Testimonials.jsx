import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Testimonials() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) return;

        swiperRef.current = new Swiper('.swiper-container', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'fraction',   // pagination fraction 1/3, 2/3...
                renderFraction: (currentClass, totalClass) => {
                    return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
                },
            },
        });
    }, []);

    return (
        <section className="testim-style1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <div className="sm-title-dote gray-text mb-20px">
                                <span>Témoignages</span>
                            </div>
                            <h2 className="fw-200 d-rotate wow">
                                <span className="rotate-text">
                                    Que disent les <span className="fw-500">Clients?</span>
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="col-lg-8 position-relative">
                        <div className="testim-swiper">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="content">
                                                <div className="text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.721 208.227" className="qout-svg">
                                                        <path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#222" strokeWidth="1" opacity="0.322"></path>
                                                    </svg>
                                                    <h4 className="fw-300">
                                                        Ce qui distingue David, c’est sa capacité à comprendre les enjeux métiers et à proposer des solutions techniques précises, évolutives et solides. Il est aujourd’hui un partenaire clé dans le développement de Kondjigbale.
                                                    </h4>
                                                </div>
                                                <div className="info d-flex align-items-center pt-40px mt-40px">
                                                    <div>
                                                        <div className="fit-img">
                                                            <img src="https://res.cloudinary.com/dr8wumlkr/image/upload/v1754421914/portfolio/oif4iob6fywwva1wu1me.jpg" alt="Yvon Koudam" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-20px">
                                                        <h6>Yvon Koudam</h6>
                                                        <span className="fs-14 mt-5px opacity-6">CEO & Cofondateur - Kondjigbale / MDKR Labs</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="content">
                                                <div className="text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.721 208.227" className="qout-svg">
                                                        <path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#222" strokeWidth="1" opacity="0.322"></path>
                                                    </svg>
                                                    <h4 className="fw-300">
                                                        Travailler avec David, c’est s’assurer d’une exécution rapide, d’une solution fiable et d’un accompagnement technique de grande qualité. Grâce à lui, Prestup a franchi un cap essentiel dans sa transformation digitale.
                                                    </h4>
                                                </div>
                                                <div className="info d-flex align-items-center pt-40px mt-40px">
                                                    <div>
                                                        <div className="fit-img">
                                                            <img src="https://res.cloudinary.com/dr8wumlkr/image/upload/v1754421940/portfolio/cjgpm4mutctpeewna4ed.jpg" alt="Djibril Maham" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-20px">
                                                        <h6>Djibril Maham</h6>
                                                        <span className="fs-14 mt-5px opacity-6">CEO & Fondateur - CSIS (Prestup)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="content">
                                                <div className="text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.721 208.227" className="qout-svg">
                                                        <path data-name="Path" d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z" transform="translate(121.55 640.568)" fill="none" stroke="#222" strokeWidth="1" opacity="0.322"></path>
                                                    </svg>
                                                    <h4 className="fw-300">
                                                        Notre site reflète parfaitement l’image que nous voulions transmettre : professionnel, clair, moderne. David a été à l’écoute, réactif et force de proposition à chaque étape. Je le recommande sans hésiter.
                                                    </h4>
                                                </div>
                                                <div className="info d-flex align-items-center pt-40px mt-40px">
                                                    <div>
                                                        <div className="fit-img">
                                                            <img src="https://res.cloudinary.com/dr8wumlkr/image/upload/v1754421087/portfolio/yqo1fasdqmrczjgoqxc0.jpg" alt="Hervé Talla Awui" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-20px">
                                                        <h6>Hervé Talla Awui</h6>
                                                        <span className="fs-14 mt-5px opacity-6">Fondateur – Ethica Advisory</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="swiper-controls swiper-contr-style2 d-flex align-items-center mt-50px">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
