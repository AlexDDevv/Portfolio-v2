import React from 'react'

export default function BtnLink({ link, icon, content, forPDF }) {
  return (
    <button className="btn-link">
        <a href={link} target='_blank'>
            <i className={icon}></i>
            {content}
            <p className="sr-only">{forPDF}</p>
        </a>
    </button>
  )
}
