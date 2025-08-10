import React from 'react';

function BlogDetailsHeader() {
    const backgroundStyle = {
        backgroundImage: 'url(https://res.cloudinary.com/dr8wumlkr/image/upload/v1754418092/portfolio/ova7ew4zvudbb6j8ppsw.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px'
    };

    return (
        <header className="blog-header pt-80px">
            <div className="container pt-80px">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="caption">
                            <div className="tag">
                                <a href="#0"><span>Hackathon</span></a>
                            </div>
                            <h2 className="mt-30px">
                                Mentorat, innovation et assurance : immersion au cœur du Hackathon CSIS
                            </h2>
                        </div>

                        <div
                            className="background bg-img mt-50px border-radius-15px"
                            style={backgroundStyle}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default BlogDetailsHeader;