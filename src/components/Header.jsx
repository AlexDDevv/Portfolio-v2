import React from 'react'
import DarkMode from './DarkMode'

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <span className="initial">AD</span>
            </div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-li">
                        <a href="#about">À propos</a>
                    </li>
                    <li className="nav-li">
                        <a href="#skills">Compétences</a>
                    </li>
                    <li className="nav-li">
                        <a href="#projects">Projets</a>
                    </li>
                    <li className="nav-li">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <DarkMode />
            </nav>
        </header>
    )
}
