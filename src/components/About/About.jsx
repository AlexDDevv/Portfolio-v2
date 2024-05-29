import React from 'react'
import BtnLink from "./BtnLink"
import data from "../../data/data.json"
import moi from "../../assets/img/portrait.webp"

export default function About() {
    return (
        <section id="about">
            <div className="about">
                <div className="presentation">
                    <h1 className="hello">Bonjour !</h1>
                    <div className="name-container">
                        <h2 className='name'>Alexis</h2>
                        <h3 className='name fam'>Delporte,</h3>
                    </div>
                    <p className="description"><strong>Développeur web</strong> en recherche d'entreprises. Autodidacte en parallèle de mon travail pendant un an, puis une formation d'intégrateur web de 9 mois avec OpenClassrooms, je souhaite maintenant faire une formation en alternance afin d'acquérir une expérience professionnelle, de découvrir le travail en équipe et de continuer à apprendre et à grandir dans ce domaine qui me passionne et m'anime.</p>
                </div>
                <div className="my-links">
                    {data.aboutLink.map((item, i) => (
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
