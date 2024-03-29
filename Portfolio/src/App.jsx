import React from "react"
import Header from "./components/Header"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import DisplayProject from "./components/Projects/DisplayProject"
import Footer from "./components/Footer/Footer"
import ArrowUp from "./components/ArrowUp"

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <About />
                <Skills />
                <DisplayProject />
            </main>
            <Footer />
            <ArrowUp />
        </>
    )
}

export default App
