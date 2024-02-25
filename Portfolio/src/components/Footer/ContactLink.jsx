import React from 'react'

export default function ContactLink({ container, href, titleAtt, icon, category, title, content }) {
    return (
        <div className={container}>
            <a href={href} target='_blank' title={titleAtt}>
                <div className="icon">
                    <i className={icon}></i>
                </div>
                <div className={category}>
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
            </a>
        </div>
    )
}
