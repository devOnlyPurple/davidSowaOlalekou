import { useState, useEffect } from 'react';
import { getProjects } from '../../repositories/api_repository';

function PortfolioCrev() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
            .then(res => {
                console.log("Project fetched:", res.data);
                setProjects(res.data.data);  // adapte selon ta structure, parfois res.data.data
            })
            .catch(err => {
                console.error("Erreur lors du fetch des projets", err);
            });
    }, []);

    return (
        <section className="portfolio-crev pt-0">
            <div className="container">
                <div className="work-boxs">
                    {projects.map((project, index) => (
                        <div key={project.key || index} className={`item cursor-pointer ${index === 0 ? 'active' : ''}`}>
                            <div
                                className="bg-img"
                                data-background={project.screen}
                                style={{ backgroundImage: `url(${project.screen})` }}
                            >
                                <div className="cont">
                                    <div className="position-relative">
                                        <a href={`/project?key=${project.key}`} className="link-overlay"></a>
                                        <h5>{project.name}</h5>
                                        <span>{project.type}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <div className="text-end mt-40">
                    <a href="/projects" className="butn bord-icon bord-gray">
                        Voir plus
                        <span className="icon">
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PortfolioCrev;
