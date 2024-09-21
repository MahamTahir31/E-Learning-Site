import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-2xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-4 mt-40 space-y-5 text-center  sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        Welcome Back!
                            <span className="hidden sm:block text-4xl">Level Up Your Learning </span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-pink-500 rounded-lg hover:opacity-75"
                            to="/Courses"
                        >
                           Enroll Now
                        </Link>
                    </div>
                </div>

             
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-38" src="./src/assets/idea.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">We provide best educational services</h1>
        </div>
    );
}
