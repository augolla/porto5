import React,{useContext,useEffect} from 'react'
import './Home.css'
import {ThemeContext} from './Navbar'
import {Link} from 'react-scroll'

function Home(params) {
    useEffect(()=>{

    })
    let cts=useContext(ThemeContext)
    return(
            <div className='Home' style={{background:cts.darkBlue}}>
                <div className='container d-flex home-container'>
                    <div className=''>
                        <p className='nameIs' style={{color:cts.green}}>&nbsp;Hi,my name is</p>
                        <h1 className='Title display-4 display-sm-5 animated bounce' style={{color:cts.whiteDark}}>Austin Ogola.</h1>
                        <div className='Roles ' style={{color:cts.whiteDarker}}>
                            <div><h5 className='fixen'>&lt;Software Engineer/&gt;</h5></div>
                            <div><h5 className='fixen'>&lt;Data Scientist/&gt;</h5></div>
                            <h6 style={{marginTop:'50px'}}>
                                I am a full-stack software engineer based in Nairobi, Kenya .
                            </h6>
                            <h6>
                                I specialize in UI/UX design and development of fullstack web applications .
                            </h6>
                            <h3>{}</h3>
                        </div>
                    <Link activeClass='active' spy={true} offset={-80} duration={620} smooth={true} to="projects">
                            <button className='btn btn-outline ' title="See Projects" 
                            style={{background:cts.darkBlue,borderColor:cts.green}}>
                                <p style={{color:cts.green}}>View My Work</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Home