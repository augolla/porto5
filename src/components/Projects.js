import React,{useContext} from 'react'
import './Projects.css'
import ProjectItem from './ProjectItem'
import {ThemeContext} from './Navbar'

function Projects(){
    const cts=useContext(ThemeContext)
    return(
        <div className='container' style={{background:cts.darkBlue}}>
            <h2 className='Title4' style={{ borderColor: cts.green, color: cts.whiteWhite }}>Projects Done</h2>
            <div className='row' style={{marginBottom:'32px'}}>
                <ProjectItem 
                    technologies={[{item:'Javascript',pos:1},{item:'CSS',pos:2}]}
                    projectTitle="FreshFoods" 
                    projectDetails='Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.'
                />
                <ProjectItem
                    technologies={[{item:'Javascript',pos:1},{item:'CSS',pos:2}]}
                    projectTitle="FreshFoods"
                    projectDetails='Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.'
                />
                <ProjectItem
                    technologies={[{item:'Javascript',pos:1},{item:'CSS',pos:2}]}
                    projectTitle="FreshFoods"
                    projectDetails='Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.'
                />
                <ProjectItem
                    technologies={[{ item: 'Javascript', pos: 1 }, { item: 'CSS', pos: 2 }]}
                    projectTitle="FreshFoods"
                    projectDetails='Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.'
                />
                <ProjectItem
                    technologies={[{ item: 'Javascript', pos: 1 }, { item: 'CSS', pos: 2 }]}
                    projectTitle="FreshFoods"
                    projectDetails='Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.'
                />
                <ProjectItem
                    technologies={[{ item: 'Javascript', pos: 1 }, { item: 'CSS', pos: 2 }]}
                    projectTitle="FreshFoods"
                    projectDetails='Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.'
                />
            </div>
        </div>
    )
}

export default Projects