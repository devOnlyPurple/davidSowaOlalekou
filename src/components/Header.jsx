// src/components/Header.jsx
function Header() {
    return (
        <header
            className="header-main box-dark bg-img"
            data-background="/assets/imgs/header/hero-bg.webp"
        >
            <div className="container position-relative">
                <div className="caption">
                    <h1><span>SOWA</span><span>David O.</span></h1>
                </div>
                <div className="row justify-content-center align-items-end">
                    <div className="col-lg-7">
                        <div className="fit-img md-mb30">
                            <img
                                src="https://res.cloudinary.com/dr8wumlkr/image/upload/v1754233541/portfolio/v3bqcqmszzkiisbhzppf.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="text">
                            <p className="fs-16">
                                J'imagine et développe des apps web & mobiles performantes, sûres et évolutives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-bg">
                <img src="/assets/imgs/star-lg.svg" alt="" />
            </div>
        </header>
    );
}

export default Header;
