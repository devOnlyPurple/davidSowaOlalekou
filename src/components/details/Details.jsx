import React from 'react';

function Details({ project }) {
    return (
        <section className="pb-80px pt-80px">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="main-post">
                            <div className="item pb-60px">
                                <article>
                                    <div className="text">
                                        <p id="project-description">
                                            {project?.details.description || "Description du projet non disponible."}
                                        </p>
                                    </div>
                                </article>

                                <div className="mb-50px mt-50px">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="iner-img sm-mb30" id="first_project">
                                                <img
                                                    src={project?.screen || project?.screen || "..."}
                                                    alt={project?.name || "Project image"}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="iner-img sm-mb30" id="second_project">
                                                <img
                                                    src={project?.screen || project?.screen || "..."}
                                                    alt={project?.name || "Project image"}
                                                />
                                            </div>
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

export default Details;