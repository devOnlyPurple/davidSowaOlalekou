import React from 'react';

function HeaderContact() {
    const backgroundStyle = {
        backgroundImage: 'url(/assets/imgs/header/bg-gradient.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <header className="pg-contact pb-80px">
            <div className="container pb-80px">
                <div className="caption text-align-center pb-40px">
                    <h1 className="fs-80">Prendre contact</h1>
                </div>
            </div>
            <div
                className="bg-img gr"
                style={backgroundStyle}
            />
        </header>
    );
}

export default HeaderContact;