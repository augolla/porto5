import React from 'react'
import './ProjectItem.css'
function ProjectItem(props){
    return(
        <div className='ProjectItem col'>
            <div className='' style={{ background:"#172A45",height:"300px",cursor:'pointer'}}>
                <div className='projectIcons'></div>
                <h5>{props.projectTitle}</h5>
                <p>{props.projectDetails}</p>
            </div>
        </div>
    )
}

export default ProjectItem