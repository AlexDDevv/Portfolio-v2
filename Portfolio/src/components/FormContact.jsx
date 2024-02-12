import React from 'react'

export default function FormContact() {
  return (
    <form action="#" className="contact-form">
        <div className="inputs">
            <div className="left-part">
                <div className="name-input input-container">
                    <input 
                        type="text" 
                        name='name'
                        id='name'
                        required
                        className='input-form'
                    />
                    <label htmlFor="name">Votre nom *</label>
                    <div className="underline"></div>
                </div>
                <div className="mail-input input-container">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        required
                        className='input-form'
                    />
                    <label htmlFor="email">Votre Email *</label>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="right-part">
                <div className="phone-input input-container">
                    <input 
                        type="tel" 
                        name="tel" 
                        id="tel" 
                        className='input-form'
                    />
                    <label htmlFor="tel">Téléphone</label>
                    <div className="underline"></div>
                </div>
                <div className="object-input input-container">
                    <input 
                        type="text" 
                        name="object" 
                        id="object" 
                        required
                        className='input-form'
                    />
                    <label htmlFor="object">Objet *</label>
                    <div className="underline"></div>
                </div>
            </div>
        </div>
        <div className="textarea input-container">
            <textarea name="textarea" id="textarea" cols="30" rows="10" required className='input-form'></textarea>
            <label htmlFor="textarea">Votre message *</label>
            <div className="underline"></div>
        </div>
        <button className="send" type='submit'>Envoyer</button>
    </form>
  )
}
