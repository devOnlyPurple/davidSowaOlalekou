import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Ici tu peux ajouter la logique d'envoi
    };

    return (
        <div className="col-lg-7 offset-lg-1">
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
            </div>
        </div>
    );
}

export default ContactForm;