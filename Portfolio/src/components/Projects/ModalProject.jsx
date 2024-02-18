import React from 'react'
import SpanProject from './SpanProject'

export default function ModalProject({ data, isOpen, setIsOpen }) {
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {isOpen && (
                <div className='modal'>
                    <div className="container">
                        <div className="content-img">
                            <img src={data.cover} alt="Image de présentation du projet" />
                        </div>
                        <div className="content-text">
                            <div className="client">
                                <h5><span>Client:</span> {data.title}</h5>
                                <p>{data.presentation}</p>
                            </div>
                            <div className="objectif">
                                <p><span>Objectifs:</span> {data.objectif}</p>
                            </div>
                            <div className="techno-use">
                                {data.techno.map((item, i) => (
                                    <SpanProject
                                        key={i}
                                        techno={item}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="links-project">
                            <a href={data.repo} target='_blank' title='Lien Github'>Github</a>
                            {data.website && (
                                <a href={data.website} target='_blank' title='Lien du site'>Site</a>
                            )}
                        </div>
                    </div>
                    <div className="overlay" onClick={toggleModal}></div>
                    <div className="close-modal" onClick={toggleModal}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            )}
        </>
    )
}
