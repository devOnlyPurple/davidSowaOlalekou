import React from 'react';

function HeaderDetails({ project }) {
    const headerStyle = {
        height: "400px",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: project?.cover ? `url(${project.cover})` : 'none'
    };

    return (
        <header className="blog-header pt-80px">
            <div className="container pt-80px">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div
                            className="background bg-img mt-50px border-radius-15px"
                            id="project-cover"
                            style={headerStyle}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderDetails;