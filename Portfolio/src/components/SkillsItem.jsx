import React, { useEffect, useRef } from 'react'

export default function SkillsItem({ icon, content }) {
    const skillsRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                skillsRef.current.classList.add("active")
            }
        })
        observer.observe(skillsRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <li className="techno" ref={skillsRef}>
            <i className={icon}>{content}</i>
        </li>
    )
}
