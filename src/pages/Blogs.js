import React from 'react'
import coming from './../images/coming.jpg';

const Blogs = () =>
{
    return (
        <section className="bg-gray-900 flex justify-center items-center py-3">
            <img
                alt="coming soon"
                className="object-cover wow animate__animated animate__zoomIn"
                src={coming}
            />
        </section>
    )
}

export default Blogs
