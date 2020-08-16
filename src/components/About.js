import React,{useContext} from 'react'
import './About.css'
import {FiSliders} from 'react-icons/fi'
import {BsFileEarmarkCode} from 'react-icons/bs'
import {ThemeContext} from './Navbar'

function About() {
    const cts=useContext(ThemeContext)
    return(
        <div className=' container About' style={{background:cts.darkBlue}}>
            <h1 className='Title1' style={{borderColor:cts.green,color:cts.whiteWhite}}>About Me</h1>
            <div className="row">
                <div className="col-12 col-md-10">
                    <div className='about' style={{color:cts.whiteDarker,marginBottom:'60px'}}>
                        <h3 style={{ fontWeight: "bold" }}>
                            Hello! <span role='img' aria-label='smile emoji'>&#128516;</span>
                        </h3>
                        <br />
                        <h4>My name is Austin Ogola Humphrey.</h4>
                        <br />
                        <h5 >
                            I am an independent software engineer based in Nairobi, Kenya.
                        </h5>
                        <br/>
                        <h5>I enjoy building things that live in the web .</h5>
                        <br />
                        <h5>
                            Outside of websites, I also develop Machine Learning/A.I models.This includes other math-intensive aspects of data science.
                        </h5>
                        <br />
                        <h5>
                            My goal is to always build products that provide pixel-perfect, performant experiences.
                        </h5>
                        <br />
                        <h5>
                            Shortly after joining University, I established Divonn where I work on a wide variety of interesting and meaningful projects on a daily basis.
                        </h5>
                        <br />
                        <h5>Here are some of the tools I use...</h5>
                    </div>
                </div>
            </div>
            <div className='container What-I-do'>
                <div><div><h3 className='Title2' style={{ borderColor: cts.green, color: cts.whiteWhite }}>What I do</h3></div></div>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-center my-4'><BsFileEarmarkCode size='2.8em' color={cts.green}/></div>
                        <div className='d-flex justify-content-center'>
                            <h5 style={{fontSize:'17px',color:cts.whiteDarker}}>Full-Stack-Development</h5>
                        </div>
                        <div className='tools row mx-1 mr-md-4 mt-3 pl-4' style={{color:cts.whiteDarker,border:`${cts.whiteDarker} solid 1px`}}>
                            <ul className='col-md-4 col mt-3'>
                                <li><p>Javascript</p></li>
                                <li><p>Python</p></li>
                                <li><p>React</p></li>
                                <li><p>Django</p></li>
                            </ul>
                            <ul className='col-md-4 col mt-3'>
                                <li><p>GraphQl</p></li>
                                <li><p>JQuery</p></li>
                                <li><p>Bootstrap</p></li>
                                <li><p>MongoDb</p></li>
                            </ul>
                            <ul className='col-md-4 col mt-3'>
                                <li><p>Node|Express</p></li>
                                <li><p>MySQL</p></li>
                                <li><p>HTML/CSS</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='d-flex justify-content-center my-4'><FiSliders size='2.6em' color={cts.green}/></div>
                        <div className='d-flex justify-content-center'><h5 style={{ fontSize: '17px', color: cts.whiteDarker }}>Artificial Intelligence</h5></div>
                        <div className='tools row mx-1 ml-md-4 mt-3 pl-4' style={{ color: cts.whiteDarker, border: `${cts.whiteDarker} solid 1px` }}>
                            <ul className='col-md-4 col mt-3'>
                                <li><p>Python</p></li>
                                <li><p>Tensorflow</p></li>
                                <li><p>Pytorch</p></li>
                                <li><p>Pandas</p></li>
                            </ul>
                            <ul className='col-md-4 col mt-3'>
                                <li><p>Matplotlib</p></li>
                                <li><p>OpenCV</p></li>
                                <li><p>Scipy</p></li>
                                <li><p>Numpy</p></li>
                            </ul>
                            <ul className="col-md-4 col mt-3">
                                <li><p>Scikit-Learn</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About