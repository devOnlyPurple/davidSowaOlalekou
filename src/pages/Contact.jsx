import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cursor from '../components/Cursor';
import Loader from '../components/Loader';
import BLurDiv from '../components/BlurDiv';
import ProgressScrollButton from '../components/ProgressScrollButton';
import HeaderContact from '../components/contact/HeaderContact';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import GoogleMap from '../components/contact/GoogleMap';

import Footer from '../components/Footer';

function Contact() {



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

                    <HeaderContact />
                    <section className="contact box-dark-gr">
                        <div className="container">
                            <div className="row align-items-center">
                                <ContactInfo />
                                <ContactForm />


                            </div>
                        </div>
                    </section>
                    <GoogleMap />
                    <Footer />


                </main>
            </div>
        </div >


    </>
}

export default Contact;
