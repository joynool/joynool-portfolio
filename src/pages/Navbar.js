import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () =>
{
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/home" className="ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0">
                    Sk. Md. Joynul Abedin
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-500 text-gray-400 flex flex-wrap items-center text-base justify-center">
                    <HashLink to="/home/#projects" className="mr-5 hover:text-white">
                        Projects
                    </HashLink>
                    <HashLink to="/home/#skills" className="mr-5 hover:text-white">
                        Skills
                    </HashLink>
                    <Link to="/blogs" className="mr-5 hover:text-white">
                        Blogs
                    </Link>
                    <a rel="noreferrer" href="https://drive.google.com/u/0/uc?id=1qtBy6cxbJYR-eOdVZnUBC1fdcJlly6ke&export=download" className="mr-5 hover:text-white">
                        Download Resume
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none text-gray-400 hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    )
}

export default Navbar
