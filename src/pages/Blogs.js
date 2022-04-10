import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const Blogs = () => {
  return (
    <section className="bg-gray-900 flex flex-col justify-center items-center py-3">
      <header className="pt-16 pb-5 text-center">
        <h1 className="mb-4 flex flex-col justify-center items-center text-3xl sm:text-4xl tracking-tight text-white font-extrabold">
          <ImQuotesLeft className=" text-gray-400" />
          &nbsp;&nbsp;Blogs
        </h1>
        <p className="text-lg text-gray-200 dark:text-gray-400 mx-5">
          All of my blogs published on
          <a className="text-blue-500" href="https://medium.com/@mithun55">
            {" "}
            medium.com{" "}
          </a>
          are arranged here...
        </p>
      </header>
      <main className="flex flex-col justify-center items-center mb-10">
        <div className="border-b-2 text-white lg:p-5 rounded-2xl w-3/4 h-auto mb-5">
          <h1 className="bg-white rounded-full text-black px-3 py-1">
            # Next.js - what is it and why do we use it?
          </h1>
          <p className="my-5 leading-8">
            As a developer, I use React JS for the frontend and Node.js for the
            backend. After identifying it as a game-changer for me, it has been
            pivotal in allowing us to deliver highly scalable, data-intensive,
            real-time back-end services to power the websites and apps for me.
            <a
              href="https://medium.com/@mithun55/next-js-what-is-it-and-why-do-we-use-it-6e5bdf78bb49"
              className="inline-flex text-white bg-green-500 border-0 ml-2 px-2 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Read More
            </a>
          </p>
        </div>
        <div className="border-b-2 text-white lg:p-5 rounded-2xl w-3/4 h-auto mb-5">
          <h1 className="bg-white rounded-full text-black px-3 py-1">
            # Next.js - what is it and why do we use it?
          </h1>
          <p className="my-5 leading-8">
            As a developer, I use React JS for the frontend and Node.js for the
            backend. After identifying it as a game-changer for me, it has been
            pivotal in allowing us to deliver highly scalable, data-intensive,
            real-time back-end services to power the websites and apps for me.
            <a
              href="https://medium.com/@mithun55/next-js-what-is-it-and-why-do-we-use-it-6e5bdf78bb49"
              className="inline-flex text-white bg-green-500 border-0 ml-2 px-2 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Read More
            </a>
          </p>
        </div>
        <div className="border-b-2 text-white lg:p-5 rounded-2xl w-3/4 h-auto mb-5">
          <h1 className="bg-white rounded-full text-black px-3 py-1">
            # Next.js - what is it and why do we use it?
          </h1>
          <p className="my-5 leading-8">
            As a developer, I use React JS for the frontend and Node.js for the
            backend. After identifying it as a game-changer for me, it has been
            pivotal in allowing us to deliver highly scalable, data-intensive,
            real-time back-end services to power the websites and apps for me.
            <a
              href="https://medium.com/@mithun55/next-js-what-is-it-and-why-do-we-use-it-6e5bdf78bb49"
              className="inline-flex text-white bg-green-500 border-0 ml-2 px-2 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Read More
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Blogs;
