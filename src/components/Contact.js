import React, { useState,useContext } from 'react';
import './Contact.css'
import * as emailjs from 'emailjs-com'
import {ThemeContext} from './Navbar'

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [notSent,setnotSent]=useState(true)

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

        setnotSent(false)
    }
    const cts=useContext(ThemeContext)
    return (
        <div className='Contact container' style={{background:cts.darkBlue}}>
            <h1 className='Title5' style={{borderColor:cts.green,color:cts.whiteWhite}}>Contact Me</h1>
            {
            notSent?
            <form action="" className="row form" onSubmit={handleSubmit}>
                <div className="form-group col-12 col-md-7" >
                    <input style={{ borderColor: cts.green, background: cts.projoBg,color: cts.whiteDark}} type="text" className="form-control" onChange={handleChange} name='name' placeholder='Your Name(Optional)'/>
                </div>
                <div className="form-group col-12 col-md-7">
                    <input style={{ borderColor: cts.green, background: cts.projoBg,color: cts.whiteDark}} type="email" className="form-control" onChange={handleChange} name='email' placeholder='Your Email Address'/>
                </div>
                <div className="form-group col-12 col-md-7">
                    <input style={{ borderColor: cts.green, background: cts.projoBg,color: cts.whiteDark}} type="text" className="form-control" onChange={handleChange} name="subject" placeholder="Email subject"/>
                </div>
                <div className="form-group col-12 col-md-7">
                    <textarea style={{ borderColor: cts.green, background: cts.projoBg,color: cts.whiteDark }} className='form-control' id="" cols="30" rows="10" onChange={handleChange} name="message" placeholder="">

                    </textarea>
                </div>
                <div className="col-7">
                    <button type="submit" className="btn btn col-6" style={{borderColor:cts.green,color:cts.green}}>Send</button>
                </div>
            </form>:
                <div className="Contact container" >
                    <div className='d-flex justify-content-center' style={{ color: cts.whiteDark }}>
                        <h2>Message Successfully Sent</h2>
                    </div>

                    <div className='d-flex justify-content-center' style={{ color: cts.whiteDarker }}>
                        <h4>I will get back to you as soon as possible </h4>
                    </div>
                </div>
                }
        </div>
    )
}

export default Contact
