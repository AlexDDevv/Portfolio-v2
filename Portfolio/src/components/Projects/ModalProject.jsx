import React from 'react'
import SpanProject from './SpanProject'

export default function ModalProject({ data, isOpen, setIsOpen }) {
    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    
    if (isOpen) {
        document.body.classList.add("antiScroll")
    } else {
        setTimeout(() => {
            document.body.classList.remove("antiScroll")
        }, 300);
    }
    
    return (
        <>
            {isOpen && (
                <>
                    <div className={`modal ${isOpen ? "opened": "closed"}`}>
                        <div className="modal-container">
                            <div className="content-img">
                                <img src={data.cover} alt="Image de présentation du projet" />
                            </div>
                            <div className="content-text">
                                <div className="project">
                                    <h4>{data.title}</h4>
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
                                <a href={data.repo} target='_blank' title='Lien Github'>Github <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                {data.website && (
                                    <a href={data.website} target='_blank' title='Lien du site'>Site <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                )}
                            </div>
                        </div>
                        <div className="close-modal" onClick={toggleModal}>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <div className="overlay" onClick={toggleModal}></div>
                </>
            )}
        </>
    )
}
