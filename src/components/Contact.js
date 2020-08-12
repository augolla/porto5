import React, { useState } from 'react';
import './Contact.css'
import * as emailjs from 'emailjs-com'

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (event) => {
        event.preventDefault()
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        emailjs
            .sendForm(
                "gmail",
                "porto",
                event.target,
                "user_YDlHVhyqP9huIEsiGShhs"
            )
            .then()
            .catch()
        console.log(form);

    }
    return (
        <div className='Contact container' >
            <h1 className='Title5'>Contact Me</h1>
            <div className='row'>
                <div className='col-6'>
                    <p>I am open to working on particularly ambitious or big projects-Especially in webdev and/or Machine Learning</p>
                    <p>If you have any request,inquiry or need clarification on anyting,feel free to email me below and I'll get back to you as soon as possible. </p>
                </div>
                <div className='col-6'></div>
                <form className='ml-3 mt-5' onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input onChange={handleChange} type="text" className="form-control shadow" name="name" placeholder="Your Name(Optional)" />
                        </div>
                        <div className="form-group col-md-6">
                            <input onChange={handleChange} type="email" className="form-control shadow" name="email" placeholder="Your Email Address*" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input onChange={handleChange} type="text" className="form-control shadow" name="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group form-group-lg">
                        <textarea onChange={handleChange} type="text" className="form-control shadow form-control-lg emailText" name="message" placeholder="Message*">
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
