import React from 'react'
import SpanProject from './SpanProject'

export default function ModalProject({ img, client, presentation, objectif, technos, repo, site }) {
    return (
        <div className='modal'>
            <div className="container">
                <div className="content-img">
                    <img src={img} alt="Image de présentation du projet" />
                </div>
                <div className="content-text">
                    <div className="client">
                        <h5><span>Client:</span> {client}</h5>
                        <p>{presentation}</p>
                    </div>
                    <div className="objectif">
                        <p><span>Objectifs:</span> {objectif}</p>
                    </div>
                    <div className="techno-use">
                        {technos.map((item, i) => {
                            <SpanProject
                                key={i}
                                techno={item}
                            />
                        })}
                    </div>
                </div>
                <div className="links-project">
                    <a href={repo} target='_blank' title='Lien Github'>Github</a>
                    {site && (
                        <a href={site} target='_blank' title='Lien du site'>Site</a>
                    )}
                </div>
            </div>
            <div className="close-modal">
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    )
}
