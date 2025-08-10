import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';
import Loader from '../components/Loader';
import BLurDiv from '../components/BlurDiv';
import ProgressScrollButton from '../components/ProgressScrollButton';
import BlogHeaderDetails from '../components/blog/BlogDetailsHeader';
import BlogHeaderContent from '../components/blog/BlogDetailsContent';
import ProjectsAll from '../components/ProjectAll';
import HeaderDetails from '../components/details/headerDetails';
import Details from '../components/details/Details';
import Intro from '../components/Intro';
import Footer from '../components/Footer';

function BlogDetails() {



    useEffect(() => {
        document.title = 'Projet - Mon Application';
        document.body.classList.add('digital-agency');
        return () => {
            document.body.classList.remove('digital-agency'); // ← C'est LE remove !
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
                    <BlogHeaderDetails />
                    <BlogHeaderContent />
                    <Footer />


                </main>
            </div>
        </div >


    </>
}

export default BlogDetails;
