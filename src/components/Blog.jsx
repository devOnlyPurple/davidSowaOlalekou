import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Blog() {
    return (
        <section className="blog-style1 box-dark">
            <div className="container">
                <div className="row mb-80px">
                    <div className="col-lg-6">
                        <div>
                            <div className="sm-title-dote mb-20px">
                                <span>Actualités</span>
                            </div>
                            <h2 className="fw-200 d-rotate wow animated" style={{ visibility: 'visible' }}>
                                <span className="rotate-text">Dernières <span className="fw-500">Nouvelles</span></span>
                            </h2>
                        </div>
                    </div>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    className="blog-swiper"
                >
                    <SwiperSlide>
                        <div className="item">
                            <div className="fit-img h-350px border-radius-15px o-hidden">
                                <img src="https://res.cloudinary.com/dr8wumlkr/image/upload/v1754418092/portfolio/ova7ew4zvudbb6j8ppsw.jpg" alt="" />
                                <a href="/blog/details" className="date">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <span><i>27</i> JUL</span>
                                    </div>
                                </a>
                                <a href="/blog/details" className="icon">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.5 28.5">
                                            <path
                                                d="M29.25.75V22.09H26.89V4.77L2.4,29.25.75,27.52,25.16,3.11H7.84V.75Z"
                                                transform="translate(-0.75 -0.75)" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                            <div className="text">
                                <div className="info fw-300 mb-15px d-flex align-items-center">
                                    <div className="sm-title-dote mr-30px">
                                        <span className="opacity-6">Hackathon</span>
                                    </div>
                                </div>
                                <h6>Mentorat, innovation et assurance : immersion au cœur du Hackathon CSIS</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Blog;