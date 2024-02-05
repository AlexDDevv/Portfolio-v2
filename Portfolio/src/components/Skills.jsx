import React from 'react'
import SkillsItem from "./SkillsItem"

export default function Skills() {
    const technologies = [
        {
            "techno": "fa-brands fa-html5",
        },
        {
            "techno": "fa-brands fa-css3-alt",
        },
        {
            "techno": "fa-brands fa-square-js",
        },
        {
            "techno": "fa-brands fa-react",
        },
        {
            "techno": "fa-brands fa-github",
        },
        {
            "techno": "ps",
            "content": "Ps"
        }
    ]

    return (
        <section id="skills">
            <h2 className="skills">Compétences</h2>
            <div className="techno-container">
                <ul className="techno-list">
                    {technologies.map((item, i) => (
                        <SkillsItem
                            key={i}
                            icon={item.techno}
                            content={item.content}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}
