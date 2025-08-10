// import { useState, useEffect } from 'react';
// import { getAllProjects } from '../../repositories/api_repository';

// function ProjectAll() {
//     const [projects, setProjects] = useState([]);

//     useEffect(() => {

//         getAllProjects()
//             .then(res => {
//                 console.log("Project fetched:", res.data);
//                 setProjects(res.data.data);  // adapte selon la structure réelle de ta réponse
//             })
//             .catch(err => {
//                 console.error("Erreur lors du fetch des projets", err);
//             });
//     }, []);

//     return (
//         <>
//             {projects.length === 0 && <p>Aucun projet à afficher.</p>}

//             {projects.map(project => (
//                 <div key={project.key} className="col-lg-4 items mt-50px">
//                     <div className="item">
//                         <div className="fit-img h-450px o-hidden position-relative">
//                             <img src={project.cover} alt={project.name} />
//                             <a href={`/details/project?key=${project.key}`} className="link-overlay"></a>
//                         </div>
//                         <div className="mt-20px">
//                             <h5>{project.name}</h5>
//                             <div className="tags text-uppercase mt-10px">
//                                 <a href="#">{project.type}</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );

// }

// export default ProjectAll;
