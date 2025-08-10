import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bord blur">
            <div className="container o-hidden">

                {/* Logo */}
                <a className="logo w-100px" href="#">
                    <img src="/assets/imgs/logo-light.svg" alt="logo" />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="icon-bar"><i className="fas fa-bars"></i></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {/* Le premier <li class="nav-item dropdown"> semble vide, je l'ai supprimé */}
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <span className="rolling-text">Accueil</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                <span className="rolling-text">A propos</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/projects">
                                <span className="rolling-text">Projets</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <span className="rolling-text">Services</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contact-button">
                    <a href="/contact" className="butn border-radius-5px">
                        <span className="text">Discutons-en</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
