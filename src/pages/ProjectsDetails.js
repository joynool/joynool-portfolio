import { CodeIcon } from '@heroicons/react/solid';
import React from 'react'
import { useParams } from 'react-router'
import { projects } from "../data";

const ProjectsDetails = () =>
{
    const { id } = useParams();
    const project = projects.find(val => val.id === parseInt(id));

    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Websites I've Built
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                                alt="gallery"
                                className="absolute inset-0 w-full h-full object-cover object-center"
                                src={project.image}
                            />
                            <div className="px-8 py-24 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                    {project.subtitle}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-white mb-3">
                                    {project.title}
                                </h1>
                                <a href="/" className="inline-flex text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-lg">Project Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsDetails
