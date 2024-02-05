import React from 'react'

export default function BtnLink({ link, icon, content }) {
  return (
    <button className="btn-link">
        <a href={link} target='_blank'>
            <i className={icon}></i>
            {content}
        </a>
    </button>
  )
}
