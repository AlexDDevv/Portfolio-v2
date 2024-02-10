import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import datas from "./data/dataProject.json"

function App() {
    return (
        <>
            <Header />
            <About />
            <Skills />
            <section id="projects">
                <h2 className="projects">Projets</h2>
                <div className="container">
                    {datas.map((item, i) => (
                        <Projects
                            key={i}
                            title={item.title}
                            description={item.description}
                            repo={item.repo}
                            site={item.website}
                            techno={item.techno}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default App
