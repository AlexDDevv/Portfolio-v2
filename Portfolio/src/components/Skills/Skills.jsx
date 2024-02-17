import React from 'react'
import SkillsItem from "./SkillsItem"
import QualiItem from './QualiItem'
import dataSkills from "../../data/dataSkills.json"

export default function Skills() {
    return (
        <section id="skills">
            <h2 className="skills">Compétences</h2>
            <div className="skills-container">
                <div className="techno-container">
                    <ul className="techno-list">
                        {dataSkills.tech.map((item, i) => (
                            <SkillsItem
                            key={i}
                            icon={item.techno}
                            content={item.content}
                            />
                            ))}
                    </ul>
                </div>
                <div className="more-container">
                    <ul className="additionnal-skills">
                        {dataSkills.qualities.map((quality, i) => (
                            <QualiItem
                                key={i}
                                quality={quality}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
