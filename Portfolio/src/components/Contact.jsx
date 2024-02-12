import React from 'react'

export default function Contact() {
    return (
        <div className="contact-details">
            <h3 className="details-title">Mes coordonnées</h3>
            <div className="details">
                <div className="mail-container info-container">
                    <a href="mailto:alexddevs@gmail.com" target='_blank' title='Email'>
                        <div className="icon">
                            <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="mail">
                            <h4>Me contacter par email</h4>
                            <p>alexddevs@gmail.com</p>
                        </div>
                    </a>
                </div>
                <div className="phone-container info-container">
                    <a href="tel:0668053483" target='_blank' title='Téléphone'>
                        <div className="icon">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                        </div>
                        <div className="phone">
                            <h4>Me contacter par téléphone</h4>
                            <p>Numéro de téléphone</p>
                        </div>
                    </a>
                </div>
                <div className="location-container info-container">
                    <a href="https://www.google.fr/maps/place/Aubagne" target='_blank' title='Localisation'>
                        <div className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="location">
                            <h4>Localisation</h4>
                            <p>13400 Aubagne</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
