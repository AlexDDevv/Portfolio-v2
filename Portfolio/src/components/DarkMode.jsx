import React from 'react'

export default function DarkMode() {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark")
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme")

    if (selectedTheme === "dark") {
        setDarkMode();
    } else {
        setLightMode();
    }

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode()
        } else {
            setLightMode()
        }
    }

  return (
    <div className='dark-mode'>
        <input 
            type="checkbox" 
            className='dark-mode-input' 
            id="darkModeToggle" 
            onChange={toggleTheme}
            defaultChecked={selectedTheme === "dark"}
        />
        <label htmlFor="darkModeToggle" className='dark-mode-label'>
            <i className="fa-solid fa-sun sun"></i>
            <i className="fa-solid fa-moon moon"></i>
            <span className="sr-only">Changer la couleur du thème du site</span>
        </label>
    </div>
  )
}
