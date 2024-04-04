import React, { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const errors = formValidation();

        if (Object.keys(errors).length === 0) {
            // Perform form submission
            console.log('Form submitted successfully:', formData);
            $('#successModal').modal('show'); // Show the modal
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            setErrors(errors);
        }
    }

    function closeModal() {
        $('#successModal').modal('hide'); // Hide the modal
    }

    function formValidation() {
        let errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h2>Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name" name="name" value={formData.name} onChange={handleChange} />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email" name="email" value={formData.email} onChange={handleChange} />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                        </div>
                        <div className="row text-end d-flex m-2">
                            <div className="col">
                                <button type="submit" className="btn btn-primary ">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           
            <div className="modal fade" id="successModal" tabIndex="-1" role="dialog" aria-labelledby="successModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
                    <div className="modal-content p-4">
                        <div className="m-1">
                            <h5 className="modal-title" id="successModalLabel">Success</h5>
                        </div>
                        <div className="m-1">
                            I will respond shortly.
                        </div>
                        <div className="m-1 text-end">
                            <button type="button" className="btn btn-primary" onClick={closeModal}>OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
