import React from 'react'
import Contact from "./Contact"
import FormContact from "./FormContact"

export default function DisplayContact() {
    return (
        <section id="contact">
            <h2 className="contact">Me contacter</h2>
            <div className="contact-container">
                <FormContact />
                <Contact />
            </div>
        </section>
    )
}
