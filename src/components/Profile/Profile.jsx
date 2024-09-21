import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../Contexts/ProfileContext";


export default function Profile() {
    const { profile } = useContext(ProfileContext); 

    return (
        <div className="flex flex-col items-center mx-auto w-full max-w-2xl p-6 bg-purple-600 shadow-lg rounded-lg">
            {/* Profile Picture */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-md bg-slate-300">
                <FaUser className="object-cover w-full h-full" />
            </div>

            {/* Profile Info */}
            <h1 className="text-center text-3xl sm:text-5xl font-semibold mt-6">{profile.name}</h1>
            <p className="text-center text-black mt-2 sm:text-lg font-bold">
                {profile.email}
            </p>
            <p className="text-center text-black mt-2 sm:text-lg font-bold">
                {profile.bio}
            </p>

            {/* Profile Actions */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/EditProfile" className="w-full sm:w-auto bg-pink-700 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-center">
                    Edit Profile
                </Link>
                <Link to="/" className="w-full sm:w-auto bg-pink-700 hover:bg-pink-600 text-white py-2 px-4 rounded-lg text-center">
                    Go Main Page
                </Link>
                
            </div>

            {/* Additional Info */}
            <div className="mt-10 w-full text-center text-black font-bold">
                <p className="text-sm">
                    Joined on: <span className="font-bold">January 10, 2024</span>
                </p>
                <p className="text-sm">
                    Member Type: <span className="font-bold">Premium</span>
                </p>
            </div>
        </div>
    );
}
