import React from 'react'
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
        <div className="footer-content">
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
    </footer>
  )
}
