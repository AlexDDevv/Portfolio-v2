import React from 'react'
import BtnLink from "./BtnLink"
import data from "../data/data.json"
import moi from "../assets/img/moi.webp"

export default function About() {
    return (
        <section id="about">
            <div className="about">
                <div className="presentation">
                    <p className="hello">Bonjour !</p>
                    <div className="name-container">
                        <h1 className='name'>Alexis</h1>
                        <h2 className='name fam'>Delporte,</h2>
                    </div>
                    <p className="description"><strong>Développeur web</strong> front-end en reconversion. Autodidacte, j'aime créer des projets esthétiques et utiles. Voulant un peu plus de structure et de challenge, j'ai suivi la formation d'intégrateur web d'OpenClassrooms. En quête d'expérience professionnelle, de découvrir le travail en équipe, de continuer à apprendre et à grandir dans ce domaine passionnant.</p>
                </div>
                <div className="my-links">
                    {data.map((item, i) => (
                        <BtnLink
                            key={i}
                            link={item.link}
                            icon={item.icon}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
            <div className="avatar">
                <img src={moi} alt="Image d'Alexis Delporte" />
            </div>
        </section>
    )
}
