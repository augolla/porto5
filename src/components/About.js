import React,{useContext} from 'react'
import './About.css'
import {FiAirplay} from 'react-icons/fi'
import {BsCommand} from 'react-icons/bs'
import {ThemeContext} from './Navbar'

function About() {
    const cts=useContext(ThemeContext)
    return(
        <div className=' container About' style={{background:cts.darkBlue}}>
            <h1 className='Title1' style={{borderColor:cts.green,color:cts.whiteWhite}}>About Me</h1>
            <div className='about' style={{color:cts.whiteDarker}}>
                <h6 >
                    Hello! I'm Austin, a software engineer based in Boston, MA.
                </h6>
                <h6>
                    I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.

                    Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.

                    Here are a few technologies I've been working with recently:
                </h6>
            </div>
            <div className='container What-I-do'>
                <div><div><h3 className='Title2'>What I do</h3></div></div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-center my-4'><FiAirplay size='3em'/></div>
                        <div className='d-flex justify-content-center'>
                            <h5>Full-Stack-Development</h5>
                        </div>
                        <div className='tools row border mx-1 mr-md-4 p-2 pt-3 py-2 py-md-4 mt-3'>
                            <ul className='col-md-4 col'>
                                <li><p>Javascript</p></li>
                                <li><p>Python</p></li>
                                <li><p>React</p></li>
                                <li><p>Django</p></li>
                            </ul>
                            <ul className='col-md-4 col'>
                                <li><p>GraphQl</p></li>
                                <li><p>JQuery</p></li>
                                <li><p>Bootstrap</p></li>
                                <li><p>MongoDb</p></li>
                            </ul>
                            <ul className='col-md-4 col'>
                                <li><p>Node|Express</p></li>
                                <li><p>MySQL</p></li>
                                <li><p>HTML/CSS</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-center my-4'><BsCommand size='3em'/></div>
                        <div className='d-flex justify-content-center'><h5>Artificial Intelligence</h5></div>
                        <div className='tools row border mx-1 ml-md-4 p-2 pt-3 pl-4 mt-3'>
                            <ul className='col-md-6 col'>
                                <li><p>Python</p></li>
                                <li><p>Tensorflow</p></li>
                                <li><p>Pytorch</p></li>
                                <li><p>Pandas</p></li>
                            </ul>
                            <ul className='col-md-6 col'>
                                <li><p>OpenCV</p></li>
                                <li><p>Scipy</p></li>
                                <li><p>Numpy</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About