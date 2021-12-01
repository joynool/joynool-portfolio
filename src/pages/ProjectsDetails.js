import { CodeIcon } from '@heroicons/react/solid';
import React from 'react'
import { useParams } from 'react-router'
import { projects } from "../data";

const ProjectsDetails = () =>
{
    const { id } = useParams();
    const project = projects.find(val => val.id === parseInt(id));

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-5">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
                        {project.title}
                    </h1>
                </div>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <div className="transition duration-500 transform hover:scale-105 wow animate__animated animate__fadeInLeft">
                        <img
                            alt="gallery"
                            className="w-full h-full object-cover object-center"
                            src={project.imgOne}
                        />
                    </div>
                    <div className="grid grid-rows-2 gap-4 wow animate__animated animate__fadeInRight">
                        <div className="transition duration-500 transform hover:scale-105">
                            <img
                                alt="gallery"
                                className="w-full object-cover object-center"
                                src={project?.imgTwo}
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center p-5">
                            <h2 className="tracking-widest text-2xl title-font font-light text-green-400 mb-5">
                                Technologies Used: {project.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {project.description}
                            </h1>
                            <div className="flex my-5">
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-white bg-gray-700 mx-auto border-0 py-2 px-2 mr-5 focus:outline-none hover:bg-gray-600 rounded text-md">Live Site</a>
                                <a href={project.front} target="_blank" rel="noreferrer" className="text-white bg-gray-700 mx-auto border-0 py-2 px-2 mr-5 focus:outline-none hover:bg-gray-600 rounded text-md">Front-End</a>
                                <a href={project.back} target="_blank" rel="noreferrer" className="text-white bg-gray-700 mx-auto border-0 py-2 px-2 focus:outline-none hover:bg-gray-600 rounded text-md">Back-End</a>
                            </div>
                        </div>
                        <div className="transition duration-500 transform hover:scale-105">
                            <img
                                alt="gallery"
                                className="w-full object-cover object-center"
                                src={project?.imgThree}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsDetails
