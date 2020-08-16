import React,{useContext} from 'react'
import './ProjectItem.css'
import {ThemeContext} from './Navbar'
import { FiExternalLink} from 'react-icons/fi'
import { FaGithub} from 'react-icons/fa'
// import { icons } from 'react-icons/lib'


function ProjectItem(props){
    const cts=useContext(ThemeContext)
    // useEffect(()=>{
    //     const githubIcon=document.querySelector('.github-icon')
    //     const external=document.querySelector('.external-icon')
    //     let icons=[githubIcon,external]
    // })
    const tech=props.technologies
    return(
        <div className='ProjectItem col-12 col-md-6 col-lg-4 mb-4'>
            <div className='' style={{ background:cts.projoBg,height:"280px",padding:'10px',position:"relative"}}>
                <div className='d-flex justify-content-center'>
                    <h5 style={{ color: cts.projoTitle,marginRight:'10px' }}>{props.projectTitle}</h5>
                </div>
                <div className='mx-3 mt-2 text-left'>
                    <p style={{color:cts.projoColor,fontSize:"15px"}}>{props.projectDetails}</p>
                </div>
                <div className=" projectIcons d-flex justify-content-center">
                    <div className='external-icon' style={{ cursor: 'pointer', color: cts.whiteDark, marginRight: '20px' }}>
                        <FiExternalLink size='1.8em' />
                    </div>
                    <div className='github-icon' style={{ cursor: 'pointer', color: cts.whiteDark, marginRight: '10px' }}>
                        <FaGithub size='1.7em' />
                    </div>
                </div>
                <div style={{position:'absolute',bottom:'0px'}}>
                    <ul style={{color:cts.projoTech}}>
                       {tech.map(tech=>{
                           return <li key={tech.pos}><p>{tech.item}</p></li>
                       })} 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem