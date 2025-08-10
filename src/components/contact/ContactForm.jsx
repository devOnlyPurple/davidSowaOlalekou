import React, { useState } from 'react';
import { Modal, Spinner, Button, Alert } from 'react-bootstrap';
import { sendMail } from '../../../repositories/api_repository';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: '', variant: '' });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setLoading(true);
        try {
            // Appel API pour envoyer le mail
            const response = await sendMail({
                canal_key: '45225',
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                content: formData.message,  // attention au nom attendu côté backend
                title: 'Contact' // ou autre selon ta logique
            });

            console.log('Mail envoyé:', response.data);

            // Tu peux aussi reset le formulaire
            setAlert({ show: true, message: 'Email envoyé avec succès', variant: 'success' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {

            setAlert({ show: true, message: 'Une erreur s\'est produite', variant: 'danger' });
            console.error('Erreur envoi mail:', error);

        }
        finally {
            setLoading(false);
        }

    };

    return (
        <div className="col-lg-7 offset-lg-1">
            {alert.show && (
                <Alert variant={alert.variant} className="mb-3">
                    {alert.message}
                </Alert>
            )}
            <div className="full-width">
                <form id="contact-form" className="form2" method="post" onSubmit={handleSubmit}>
                    <div className="messages"></div>

                    <div className="controls row">
                        <div className="col-lg-6">
                            <div className="form-group mb-30px">
                                <input
                                    id="form_name"
                                    type="text"
                                    name="name"
                                    placeholder="Nom"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="form-group mb-30px">
                                <input
                                    id="form_email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div class="col-12">

                            <div className="form-group mb-30px">
                                <input
                                    id="form_subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Sujet"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <textarea
                                    id="form_message"
                                    name="message"
                                    placeholder="Message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mt-30px">
                                <button type="submit" className="butn butn-full butn-bord radius-30">
                                    <span className="text">Parlons</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <Modal show={loading} centered backdrop="static" keyboard={false}>
                    <Modal.Body className="d-flex justify-content-center align-items-center">
                        <img src="/assets/imgs/loading.gif" alt="Chargement..." style={{ width: 80, height: 80 }} />
                        <span className="ms-3">Envoi en cours...</span>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default ContactForm;