import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';
import Loader from '../components/Loader';
import BLurDiv from '../components/BlurDiv';
import ProgressScrollButton from '../components/ProgressScrollButton';
import ProjectsAll from '../components/ProjectAll';
import Team from '../components/Team';
import Header from '../components/projects/header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import PortfolioCrev from '../components/PortfolioCrev';

function Projects() {
    useEffect(() => {
        document.title = 'Projets - Mon Application';
        document.body.classList.add('digital-agency');
        return () => {
            document.body.classList.remove('project-detail-page'); // ← C'est LE remove !
        };
    }, []);

    return <>
        <Loader />
        <Cursor />
        <BLurDiv />
        <ProgressScrollButton />
        <Navbar />
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <main className="o-hidden">
                    <Header />


                    <section className="team-style1 pb-60px box-dark">
                        <div className="container">
                            <div className="row">
                                <ProjectsAll />
                            </div>
                        </div>
                    </section>



                    <Footer />
                </main>
            </div>
        </div>
    </>
}

export default Projects;
