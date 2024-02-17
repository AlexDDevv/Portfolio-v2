import React from 'react'
import Projects from './Projects'
import datas from "../data/dataProject.json"

export default function DisplayProject() {
    return (
        <section id="projects">
            <h2 className="projects">Projets</h2>
            <div className="container">
                {datas.map((item, i) => (
                    <Projects
                        key={i}
                        title={item.title}
                        description={item.description}
                        repo={item.repo}
                        site={item.website}
                        techno={item.techno}
                    />
                ))}
            </div>
        </section>
    )
}
