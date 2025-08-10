import React from 'react';

function BlogDetailsContent() {
    return (
        <section className="pb-80px pt-80px">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="main-post">
                            <div className="item pb-60px">
                                <article>
                                    <div className="text">
                                        <p>
                                            <span className="spec-letter">E</span>n tant que mentor #Tech au
                                            Hackathon AssurTech organisé par CSIS, j'ai accompagné les équipes
                                            participantes en partageant mon expertise en développement et en
                                            architecture logicielle. Mon objectif était de guider les
                                            développeurs vers des solutions robustes et adaptées, tout en les
                                            aidant à surmonter les défis techniques rencontrés durant la
                                            compétition.
                                        </p>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Cette expérience m'a permis de renforcer mes compétences en gestion
                                            de projet agile et de collaborer avec des talents variés autour
                                            d'objectifs communs. Elle a aussi confirmé l'importance du mentorat
                                            pour accélérer l'apprentissage, favoriser l'innovation et garantir
                                            la qualité des livrables dans un cadre compétitif.
                                        </p>
                                    </div>
                                    <div className="title mt-30px">
                                        <h4>Les clés d'un mentorat #Tech réussi</h4>
                                    </div>
                                    <div className="text mt-20px">
                                        <p>
                                            Le mentorat ne se limite pas à transmettre des connaissances
                                            techniques. Il s'agit également d'encourager l'autonomie, de
                                            favoriser la créativité et de promouvoir des pratiques de travail
                                            efficaces. Lors de ce hackathon, j'ai pu constater que ces éléments
                                            sont essentiels pour aboutir à des solutions pertinentes et
                                            pérennes.
                                        </p>
                                    </div>
                                </article>

                                <div className="post-qoute mt-50px">
                                    <h6 className="fz-18">
                                        <span className="d-block">
                                            Le mentorat, c'est semer une graine d'expertise pour voir fleurir le potentiel des autres.
                                        </span>
                                        <span className="fs-16 fw-400 text-uppercase ls-1px mt-20px mb-0">
                                            - David Sowa O.
                                        </span>
                                    </h6>
                                </div>

                                <div className="mb-50px mt-50px">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="iner-img sm-mb30">
                                                <img
                                                    src="https://res.cloudinary.com/dr8wumlkr/image/upload/v1754420108/portfolio/sc2gyggxj4tjrberuphp.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="iner-img">
                                                <img
                                                    src="https://res.cloudinary.com/dr8wumlkr/image/upload/v1754420238/portfolio/jlunic7ncil6dm3k6yf6.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="info-area d-flex pt-50px">
                                <div>
                                    <div className="tags d-flex align-items-center">
                                        <div>
                                            <a href="#0">Tech</a>
                                            <a href="#0">AssurTech</a>
                                            <a href="#0">Mentor</a>
                                            <a href="#0">Dev</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-auto">
                                    <div className="share-icon d-flex align-items-center">
                                        <div>
                                            <span>Share :</span>
                                        </div>
                                        <div>
                                            <a href="https://www.facebook.com/">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://www.twitter.com/">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.youtube.com/">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogDetailsContent;