import React from "react";
import { Link } from "react-router-dom";

export default function Progress() {
    return (
        <div className="py-16 bg-purple-400">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-3 md:space-y-0 md:flex md:gap-2 lg:items-center lg:gap-1">
                    <div className="md:8/10 lg:w-7/12 ml-10">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Here is your progress...
                        </h2>
                        <p className="mt-6 text-black font-bold w-1/2">
                        Continue your learning journey with us and enhance your technical skills. Join our community to explore new technologies, gain hands-on experience, and stay ahead in the ever-evolving tech world.
                        </p>
                        <Link
                            className="inline-flex text-white items-center mt-5 px-6 py-3 font-medium bg-pink-500 rounded-lg hover:opacity-75"
                            to="/Courses"
                        >
                            Continue Learning
                        </Link>
                    </div>
                    <div className="md:5/12 lg:w-/12">
                        <img
                            src="./src/assets/progress.png"
                            alt="image"
                            className="w-80 animate-drop"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}