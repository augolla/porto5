import React from 'react'
import './Projects.css'
import ProjectItem from './ProjectItem'

function Projects(){
    return(
        <div className='container'>
            <h2 className='Title4'>Some Projects I'Ve Done</h2>
            <div className='row' style={{marginBottom:'32px'}}>
                <ProjectItem/>
                <ProjectItem />
                <ProjectItem />
            </div>
            <div className='row'>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    )
}

export default Projects