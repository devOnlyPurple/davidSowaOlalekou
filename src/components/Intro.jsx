// src/components/Intro.jsx
function Intro() {
    return (
        <section className="intro-style3" id="about">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <div className="fit-img h-600px border-radius-15px o-hidden position-relative md-mb50">
                            <img
                                src="https://res.cloudinary.com/dr8wumlkr/image/upload/v1754416208/portfolio/uyxtqmwh5lxcop1rbixp.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="v-align-between h-100">
                            <div>
                                <div className="sm-title-dote gray-text mb-20px">
                                    <span>Qui suis-je?</span>
                                </div>
                                <p style={{ textAlign: "justify", fontWeight: "normal" }}>
                                    Je développe des applications sur-mesure performantes, sécurisées et adaptées à vos besoins métiers.
                                    De la conception à la maintenance, je vous accompagne à chaque étape avec rigueur : développement optimisé, intégration d’API, automatisations, tests approfondis et support technique personnalisé.
                                    Mon objectif : vous fournir des solutions fiables, évolutives et simples d’utilisation pour booster votre activité.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro;
