import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';
import Loader from '../components/Loader';
import BLurDiv from '../components/BlurDiv';
import ProgressScrollButton from '../components/ProgressScrollButton';
import ProjectsAll from '../components/ProjectAll';
import HeaderDetails from '../components/details/headerDetails';
import Header from '../components/projects/header';

import Details from '../components/details/Details';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import PortfolioCrev from '../components/PortfolioCrev';
import { useSearchParams } from 'react-router-dom';
import { getProjectByKey } from '../../repositories/api_repository';
function Project() {
    const [project, setProject] = useState(null);
    const [searchParams] = useSearchParams();
    const projectKey = searchParams.get('key');


    useEffect(() => {
        // Définir le titre de la page
        document.title = 'Projet - Mon Application';
        document.body.classList.add('digital-agency');
        // Récupérer le projet si on a une clé
        if (projectKey) {
            getProjectByKey(projectKey)
                .then(res => {
                    console.log("Project détail fetched:", res.data);
                    setProject(res.data.data); // ou res.data selon ta structure

                    // Optionnel : mettre à jour le titre avec le nom du projet
                    if (res.data.data?.name) {
                        document.title = `${res.data.data.name} - Mon Application`;
                    }


                })
                .catch(err => {
                    console.error("Erreur lors du fetch du projet", err);

                });
        } else {

        }
        return () => {
            document.body.classList.remove('digital-agency'); // ← C'est LE remove !
        };
    }, [projectKey]);

    return <>
        <Loader />
        <Cursor />
        <BLurDiv />
        <ProgressScrollButton />
        <Navbar />
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <main className="o-hidden">
                    <Header title={project?.name || ""} />
                    <HeaderDetails project={project} />
                    <Details project={project} />
                    <Footer />
                </main>
            </div>
        </div >


    </>
}

export default Project;
