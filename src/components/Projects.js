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
                    technologies={[
                        { item: 'Javascript', pos: 1 }, 
                        { item: 'React', pos: 2 } , 
                        { item: 'Firebase', pos: 3 },
                        { item: 'HTML/CSS', pos: 4 }
                        
                    ]}
                    projectTitle="Reep" 
                    projectDetails='A Basic Google keep clone'
                />

                <ProjectItem
                    technologies={[
                        {item:'Javascript',pos:1},
                        {item:'React',pos:2},
                        { item: 'HTML/CSS', pos: 3 },
                        { item: 'Node/Express', pos: 4 }
                    ]}
                    projectTitle="FreshFoods"
                    projectDetails='An interactive e-commerce site for groceries'
                />

                <ProjectItem
                    technologies={[
                        {item:'Python',pos:1},
                        {item:'Javascript',pos:2},
                        {item:'Web Assembly',pos:3},
                    ]}
                    projectTitle="Oldies"
                    projectDetails='A collection of simple classic games I cloned'
                />

                <ProjectItem
                    technologies={[
                        { item: 'Javascript', pos: 1 },
                        { item: 'HTML/CSS', pos: 2 },
                        { item: 'Jquery', pos: 3 },
                    ]}
                    projectTitle="AnimateX"
                    projectDetails='A library of reusable web animation components'
                />

                <ProjectItem
                    technologies={[
                        { item: 'Javascript', pos: 1 },
                        { item: 'Python', pos: 2 },
                        { item: 'Jquery', pos: 3 },
                        { item: 'VueJs', pos: 4 },
                        { item: 'Node/Express', pos: 5 },
                    ]}
                    projectTitle="Templates"
                    projectDetails='Collection of responsive web-design templates I created'
                />

                <ProjectItem
                    technologies={[
                        { item: 'Javascript', pos: 1 },
                        { item: 'HTML/CSS', pos: 2 },
                        { item: 'Jquery', pos: 3 },
                        { item: 'React', pos: 4 },
                    ]}
                    projectTitle="Austine's 4"
                    projectDetails='Third iteration of my personal website.'
                />
            </div>
        </div>
    )
}

export default Projects