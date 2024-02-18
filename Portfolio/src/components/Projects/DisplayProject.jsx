import React, { useState } from 'react'
import Projects from './Projects'
import datas from "../../data/dataProject.json"
import ModalProject from './ModalProject'

export default function DisplayProject() {
    const [isOpen, setIsOpen] = useState(false)
    const [projectSelected, setProjectSelected] = useState(null)

    const selectProject = (data) => {
        setProjectSelected(data)

        setTimeout(() => {
            setIsOpen(true);
          }, 0);
    }
    
    return (
        <section id="projects">
            <h2 className="projects">Projets</h2>
            <div className="container">
                {datas.map((data, id) => (
                    <Projects
                        key={id}
                        id={data.id}
                        title={data.title}
                        description={data.description}
                        repo={data.repo}
                        site={data.website}
                        techno={data.techno}
                        onClick={() => selectProject(data)}
                    />
                ))}
            </div>
            {projectSelected && (
                <ModalProject 
                    data={projectSelected}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />  
            )}
        </section>
    )
}
