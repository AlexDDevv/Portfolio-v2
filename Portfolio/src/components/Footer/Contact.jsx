import React from 'react'
import ContactLink from './ContactLink'
import dataLinks from '../../data/data.json'

export default function Contact() {
    return (
        <div className="contact-details">
            {dataLinks.contactLink.map((item, i) => (
                <ContactLink 
                    key={i}
                    container={item.container}
                    href={item.href}
                    titleAtt={item.titleAtt}
                    icon={item.icon}
                    category={item.category}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    )
}
