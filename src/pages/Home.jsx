import React from 'react';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';
import Loader from '../components/Loader';
import ProgressScrollButton from '../components/ProgressScrollButton';
import Header from '../components/Header';
import Intro from '../components/Intro';
import PortfolioCrev from '../components/PortfolioCrev';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Loader />
            <Cursor />
            <ProgressScrollButton />
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="o-hidden">
                        <Header />
                        <Intro />
                        <PortfolioCrev />
                        <Services />
                        <Testimonials />
                        <Blog />

                        <Footer />
                    </main>
                </div>
            </div>
        </>
    );
}

export default Home;
