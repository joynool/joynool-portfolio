import React from 'react'
import joynul from './../images/joynul.JPG';

const About = () =>
{
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-light text-white">
                        Hi, my name is <span className="font-semibold">Sk. Md. Joynul Abedin</span>
                        <br />I'm a Web Developer
                    </h1>
                    <p className="mb-8 leading-relaxed text-2xl font-light text-white italic">
                        Have an incredible design that needs to be transformed into a website?
                        <br />
                        Or you have only an idea and need a website immediately?
                        <br />
                        Want some cool featured added to your site but don’t know where to begin?
                        <br />
                        I’d love to help!
                    </p>
                    <p className="mb-8 leading-relaxed">
                        I am from Bangladesh. I Specialize in MERN stack development, but picking up a new framework or language isn't a problem. I always look for challenges where I can use my potential at most.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://drive.google.com/file/d/1qtBy6cxbJYR-eOdVZnUBC1fdcJlly6ke/view?usp=sharing"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Resume
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={joynul}
                    />
                </div>
            </div>
        </section>
    )
}

export default About
