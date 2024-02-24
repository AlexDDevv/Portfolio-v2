import React from 'react'
import Contact from './Contact'
import FooterLink from "./FooterLink"

export default function Footer() {
    const footerInfo = [
        {
            "link": "https://github.com/AlexDDevv",
            "icon": "fa-brands fa-github",
            "title": "Github"
        },
        {
            "link": "https://www.instagram.com/sport.devweb/",
            "icon": "fa-brands fa-instagram",
            "title": "Instagram"
        },
        {
            "link": "mailto:alexddevs@gmail.com",
            "icon": "fa-solid fa-envelope",
            "title": "Gmail"
        },
        {
            "link": "",
            "icon": "fa-solid fa-file-pdf",
            "title": "Voir le CV PDF"
        },
    ]

    return (
        <footer className="footer">
            <section id="contact">
                <h2 className="contact">Me contacter</h2>
                <div className="footer-content">
                    <Contact />
                    <ul className="footer-list">
                        {footerInfo.map((item, i) => (
                            <FooterLink
                                key={i}
                                link={item.link}
                                icon={item.icon}
                                title={item.title}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </footer>
    )
}
