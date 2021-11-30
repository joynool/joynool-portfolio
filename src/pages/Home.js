import React from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'

const Home = () =>
{
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
    )
}

export default Home
