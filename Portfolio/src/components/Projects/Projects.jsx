import React from 'react'
import SpanProject from './SpanProject'

export default function Projects({ title, description, repo, site, techno }) {
    return (
        <div className="project-container">
            <div className="title-container">
                <h3 className="title-project">{title}</h3>
                <i className="fa-solid fa-arrow-up-right-from-square" title='Voir plus'></i>
            </div>
            <div className="description-container">
                <p className="description-project">{description}</p>
            </div>
            <div className="span-container">
                {techno.map((tech, i) => (
                    <SpanProject
                        key={i}
                        techno={tech}
                    />
                ))}
            </div>
            <div className="redirection">
                <a href={repo} target='_blank' title='Lien Github'><i className="fa-brands fa-github"></i></a>
                {site && (
                    <a href={site} target='_blank' title='Lien du site'><i className="fa-solid fa-link"></i></a>
                )}
            </div>
        </div>
    )
}