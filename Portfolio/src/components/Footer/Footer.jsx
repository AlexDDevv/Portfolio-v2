import React from 'react'
import Contact from './Contact'
import FooterLink from "./FooterLink"
import datas from "../../data/data.json"

export default function Footer() {
    return (
        <footer className="footer">
            <section id="contact">
                <h2 className="contact">Me contacter</h2>
                <div className="footer-content">
                    <Contact />
                    <ul className="footer-list">
                        {datas.footerLink.map((item, i) => (
                            <FooterLink
                                key={i}
                                link={item.link}
                                icon={item.icon}
                                title={item.title}
                                forPDF={item.forPDF}
                            />
                        ))}
                    </ul>
                </div>
            </section>
        </footer>
    )
}
