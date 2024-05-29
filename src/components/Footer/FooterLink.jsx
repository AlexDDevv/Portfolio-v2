import React, { useRef, useEffect } from 'react'

export default function FooterLink({ link, icon, title }) {
    const footerRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                footerRef.current.classList.add("active-link")
            }
        })
        observer.observe(footerRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <li className="footer-li" ref={footerRef}>
            <a href={link} className="footer-link" title={title} target='_blank'>
                <i className={icon}></i>
            </a>
        </li>
    )
}
