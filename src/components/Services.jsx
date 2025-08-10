import React from 'react';

function Services() {
    return (
        <section className="box-dark text-light" id="services">
            <div className="services-style1">
                <div className="container">
                    <div className="row justify-content-between align-items-end mb-80px">
                        <div className="col-lg-5">
                            <div className="md-mb30">
                                <div className="sm-title-dote mb-20px">
                                    <span>Mes Services</span>
                                </div>
                                <h2 className="fw-200">
                                    Transformer <span className="fw-500">vos idées en innovation concrète</span>
                                </h2>
                            </div>
                        </div>
                        {/* 
            <div className="col-lg-6">
              <div className="text">
                <p>Crafting data-driven strategies to elevate your online presence. I align your business goals with innovative digital solutions, ensuring measurable growth and a competitive edge in the digital landscape.</p>
                <p className="fs-16 fw-200 mt-15px">Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
              </div>
            </div> 
            */}
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="serv-item mb-40px">
                                <div className="cont">
                                    <div className="img-icon w-60px mb-80px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="67" viewBox="0 0 66 67">
                                            <path d="M27 65.5C26.853 65.5 26.7159 65.4581 26.5999 65.3853L0.86302 49.8545C0.63777 49.7187 0.5 49.475 0.5 49.2125C0.5 49.2125 0.5 42.4573 0.5 42.4507C0.502409 42.1881 0.647406 41.9404 0.874313 41.8083L4.83651 39.4176L0.86287 37.0196C0.63777 36.8838 0.5 36.6402 0.5 36.3776C0.5 36.3776 0.5 29.6224 0.5 29.6158C0.502409 29.3535 0.647557 29.1053 0.874313 28.9735L4.83636 26.5826L0.86302 24.1849C0.63777 24.0489 0.5 23.8054 0.5 23.5427C0.5 23.5427 0.5 16.7875 0.5 16.7809C0.502409 16.5119 0.656892 16.2647 0.874463 16.1386L26.6102 0.608533C26.8499 0.463822 27.1501 0.463822 27.3898 0.608533C27.3898 0.608533 53.089 16.1165 53.1257 16.1386C53.3559 16.2776 53.4977 16.5187 53.5 16.7875V23.5427C53.5 23.8054 53.3624 24.0489 53.137 24.1848L49.1636 26.5826C49.1636 26.5826 53.1225 28.9718 53.1255 28.9736C53.3478 29.1077 53.4976 29.3514 53.4999 29.6226V36.3778C53.4999 36.6403 53.3622 36.8839 53.1368 37.0198L49.1633 39.4176C49.1633 39.4176 53.1234 41.8073 53.1252 41.8083C53.3475 41.9424 53.4976 42.1841 53.4999 42.4574V49.2126C53.4999 49.4752 53.3622 49.7188 53.1368 49.8547L27.4001 65.3853C27.2841 65.4581 27.1471 65.5 27 65.5ZM27.7528 58.4173V63.4177L51.9943 48.7894V43.789L27.7528 58.4173ZM2.00568 48.7894L26.2472 63.4177V58.4173L2.00568 43.789V48.7894ZM2.70688 42.4573L27 57.1168L51.2933 42.4573L47.7096 40.2949L27.4001 52.5506C27.2841 52.6232 27.1471 52.6651 27 52.6651C26.853 52.6651 26.7159 52.6232 26.5999 52.5504L6.29055 40.2949L2.70688 42.4573ZM27.7528 45.5824V50.5829L51.9943 35.9546V30.9541L27.7528 45.5824ZM2.00568 35.9546L26.2472 50.5829V45.5824L2.00568 30.9541V35.9546ZM2.70673 29.6224L27 44.2819L51.2933 29.6224L47.7098 27.4598L27.4001 39.7156C27.284 39.7882 27.147 39.8303 27 39.8303C26.853 39.8303 26.7159 39.7884 26.5999 39.7156L6.2901 27.4598L2.70673 29.6224ZM27.7528 32.7475V37.748L51.9943 23.1197V18.1192L27.7528 32.7475ZM2.00568 23.1197L26.2472 37.748V32.7475L2.00568 18.1192V23.1197ZM2.70673 16.7875L27 31.4471L51.2933 16.7875L27 2.128L2.70673 16.7875Z"></path>
                                        </svg>
                                    </div>
                                    <h6 className="mb-25px">Développement web & mobile</h6>
                                    <p className="fs-16">
                                        Créer des solutions digitales efficaces pour booster votre visibilité et atteindre vos objectifs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="serv-item mb-40px">
                                <div className="cont">
                                    <div className="img-icon w-60px mb-80px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66">
                                            <path d="M32.8485 65.4997C32.7444 65.5025 32.6388 65.4834 32.5372 65.4383L3.96307 52.7507C3.68167 52.6257 3.5 52.3444 3.5 52.0336V15.3805C3.5 15.1161 3.63195 14.8694 3.85094 14.7248C4.06978 14.5801 4.34623 14.5569 4.58566 14.6634L17.4386 20.3705V8.33195C17.4386 8.06754 17.5705 7.82084 17.7895 7.67626C18.0084 7.53153 18.2848 7.50835 18.5242 7.61486L31.3772 13.3219V1.28327C31.3772 1.01886 31.5091 0.772159 31.7281 0.627583C31.9469 0.48285 32.2232 0.459668 32.4628 0.566181L61.0369 13.2538C61.3183 13.3786 61.5 13.6601 61.5 13.9709V50.624C61.5 51.1821 60.9126 51.5678 60.4078 51.3383L47.5614 45.4917V57.6729C47.5614 58.231 46.9721 58.616 46.4692 58.3871L33.6228 52.5405V64.7217C33.6228 65.1542 33.2487 65.4891 32.8485 65.4997ZM5.04873 51.5222L32.0741 63.522V28.5797L5.04873 16.5797V51.5222ZM33.6228 50.8223L46.0127 56.4613V21.531L18.9873 9.53101V21.0581L33.1598 27.351C33.4412 27.4759 33.6228 27.7573 33.6228 28.0681V50.8223ZM47.5614 43.7737L59.9513 49.4126V14.4823L32.9259 2.48233V14.0094L47.0983 20.3023C47.3797 20.4272 47.5614 20.7087 47.5614 21.0194V43.7737Z"></path>
                                        </svg>
                                    </div>
                                    <h6 className="mb-25px">Consulting digital & stratégie tech</h6>
                                    <p className="fs-16">Guider vos choix tech pour booster votre croissance.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="serv-item mb-40px">
                                <div className="cont">
                                    <div className="img-icon w-60px mb-80px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="66" viewBox="0 0 67 66">
                                            <path d="M33 65.5C15.0794 65.5 0.5 50.9206 0.5 33C0.5 15.0794 15.0794 0.5 33 0.5C50.9206 0.5 65.5 15.0794 65.5 33C65.5 50.9206 50.9206 65.5 33 65.5ZM2.33692 37.1008C4.34878 52.2265 17.333 63.9337 33 63.9337C48.667 63.9337 61.6512 52.2265 63.6631 37.1008C62.0271 38.845 59.3284 40.4183 55.6897 41.712C49.6173 43.8711 41.5593 45.0602 33 45.0602C24.4408 45.0602 16.3829 43.8711 10.3103 41.712C6.67155 40.4181 3.97304 38.8448 2.33692 37.1008ZM2.06627 33C2.06627 35.6174 5.26239 38.255 10.835 40.2363C16.7434 42.337 24.6152 43.494 33 43.494C41.385 43.494 49.2566 42.337 55.165 40.2363C60.7376 38.255 63.9337 35.6174 63.9337 33C63.9337 15.9431 50.0569 2.06627 33 2.06627C15.9431 2.06627 2.06627 15.9431 2.06627 33Z"></path>
                                        </svg>
                                    </div>
                                    <h6 className="mb-25px">Maintenance & support technique</h6>
                                    <p className="fs-16">
                                        Assurer la stabilité, résoudre les problèmes et maintenir vos systèmes performants.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="serv-item mb-40px">
                                <div className="cont">
                                    <div className="img-icon w-60px mb-80px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="66" viewBox="0 0 67 66">
                                            <path d="M33 65.5C15.0794 65.5 0.5 50.9206 0.5 33C0.5 15.0794 15.0794 0.5 33 0.5C50.9206 0.5 65.5 15.0794 65.5 33C65.5 50.9206 50.9206 65.5 33 65.5ZM2.33692 37.1008C4.34878 52.2265 17.333 63.9337 33 63.9337C48.667 63.9337 61.6512 52.2265 63.6631 37.1008C62.0271 38.845 59.3284 40.4183 55.6897 41.712C49.6173 43.8711 41.5593 45.0602 33 45.0602C24.4408 45.0602 16.3829 43.8711 10.3103 41.712C6.67155 40.4181 3.97304 38.8448 2.33692 37.1008ZM2.06627 33C2.06627 35.6174 5.26239 38.255 10.835 40.2363C16.7434 42.337 24.6152 43.494 33 43.494C41.385 43.494 49.2566 42.337 55.165 40.2363C60.7376 38.255 63.9337 35.6174 63.9337 33C63.9337 15.9431 50.0569 2.06627 33 2.06627C15.9431 2.06627 2.06627 15.9431 2.06627 33Z"></path>
                                        </svg>
                                    </div>
                                    <h6 className="mb-25px">Formation & mentoring</h6>
                                    <p className="fs-16">Accompagner vos équipes pour maîtriser outils et bonnes pratiques.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="serv-item mb-40px">
                                <div className="cont">
                                    <div className="img-icon w-60px mb-80px">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="66" viewBox="0 0 67 66">
                                            <path d="M33 65.5C15.0794 65.5 0.5 50.9206 0.5 33C0.5 15.0794 15.0794 0.5 33 0.5C50.9206 0.5 65.5 15.0794 65.5 33C65.5 50.9206 50.9206 65.5 33 65.5ZM2.33692 37.1008C4.34878 52.2265 17.333 63.9337 33 63.9337C48.667 63.9337 61.6512 52.2265 63.6631 37.1008C62.0271 38.845 59.3284 40.4183 55.6897 41.712C49.6173 43.8711 41.5593 45.0602 33 45.0602C24.4408 45.0602 16.3829 43.8711 10.3103 41.712C6.67155 40.4181 3.97304 38.8448 2.33692 37.1008ZM2.06627 33C2.06627 35.6174 5.26239 38.255 10.835 40.2363C16.7434 42.337 24.6152 43.494 33 43.494C41.385 43.494 49.2566 42.337 55.165 40.2363C60.7376 38.255 63.9337 35.6174 63.9337 33C63.9337 15.9431 50.0569 2.06627 33 2.06627C15.9431 2.06627 2.06627 15.9431 2.06627 33Z"></path>
                                        </svg>
                                    </div>
                                    <h6 className="mb-25px">Automatisation des outils</h6>
                                    <p className="fs-16">Automatiser vos processus et connecter vos outils efficacement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="skills p-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg col-md-4 col-sm-6">
                            <div className="item">
                                <div className="box">
                                    <div className="img">
                                        <img src="assets/imgs/skills/flutter.png" alt="Flutter" />
                                    </div>
                                </div>
                                <h6>Flutter</h6>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-sm-6">
                            <div className="item">
                                <div className="box">
                                    <div className="img">
                                        <img src="assets/imgs/skills/nodejs.png" alt="Node js" />
                                    </div>
                                </div>
                                <h6>Node js</h6>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-sm-6">
                            <div className="item">
                                <div className="box">
                                    <div className="img">
                                        <img src="assets/imgs/skills/reactjs.png" alt="React Js" />
                                    </div>
                                </div>
                                <h6>React Js</h6>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-sm-6">
                            <div className="item">
                                <div className="box">
                                    <div className="img">
                                        <img src="assets/imgs/skills/Laravel.png" alt="Laravel" />
                                    </div>
                                </div>
                                <h6>Laravel</h6>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-sm-6">
                            <div className="item">
                                <div className="box">
                                    <div className="img">
                                        <img src="assets/imgs/skills/s1.png" alt="Figma" />
                                    </div>
                                </div>
                                <h6>Figma</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Services;
