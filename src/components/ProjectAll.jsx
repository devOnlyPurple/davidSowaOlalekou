import { useState, useEffect } from 'react';
import { getAllProjects } from '../../repositories/api_repository';

function ProjectAll() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getAllProjects()
            .then(res => {
                console.log("Project fetched:", res.data);
                setProjects(res.data.data);  // adapte selon la structure réelle de ta réponse
            })
            .catch(err => {
                console.error("Erreur lors du fetch des projets", err);
            });
    }, []);

    return (
        <>
            {projects.length === 0 && <p>Aucun projet à afficher.</p>}

            {projects.map(project => (
                <div key={project.id || project.key} className="col-lg-4">
                    <div className="item mb-60px">
                        <div className="fit-img h-350px border-radius-15px o-hidden">
                            <img src={project.cover} alt="" />
                        </div>
                        <a href={`/project?key=${project.key}`} className="icon">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.5 28.5">
                                    <path
                                        d="M29.25.75V22.09H26.89V4.77L2.4,29.25.75,27.52,25.16,3.11H7.84V.75Z"
                                        transform="translate(-0.75 -0.75)" />
                                </svg>
                            </span>
                        </a>
                        {/* <div className="text">
                            <h5 className="name">{project.name}</h5>
                            <h6 className="position">{project.type}</h6>
                        </div> */}
                        <div class="mt-20px">
                            <h5>{project.name}</h5>
                            <div class="tags text-uppercase mt-10px">

                                <a href={`/project?key=${project.key}`}>{project.type}</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProjectAll;