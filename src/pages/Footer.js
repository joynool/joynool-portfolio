import React from 'react'

const Footer = () =>
{
    return (
        <footer className="bg-gray-800 text-white footer">
            <ul className="flex justify-center py-5">
                <li className="mr-10 cursor-pointer transition duration-100 transform hover:scale-125">
                    <a href="https://www.linkedin.com/in/skjoynul">LinkedIn</a>
                </li>
                <li className="mr-10 cursor-pointer transition duration-100 transform hover:scale-125">
                    <a href="mailto:sk.joynool.abedin@gmail.com">Email</a>
                </li>
                <li className="cursor-pointer transition duration-100 transform hover:scale-125">
                    <a href="https://github.com/joynool">GitHub</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
