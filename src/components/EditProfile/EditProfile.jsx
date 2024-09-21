import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../../Contexts/ProfileContext";



export default function EditProfile() {
    const { profile, setProfile } = useContext(ProfileContext); // Access and update profile context

    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);
    const [bio, setBio] = useState(profile.bio);

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile({ ...profile, name, email, bio });
        navigate("/profile"); 
    };

    const handleCancel = () => {
        navigate("/profile");
    };

    return (
        <div className="mx-auto w-full max-w-lg p-6 bg-purple-600 shadow-lg rounded-lg">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-white">Edit Profile</h1>

            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-6">
                    <label htmlFor="name" className="block text-lg font-medium text-black">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                {/* Email Field */}
                <div className="mb-6">
                    <label htmlFor="email" className="block text-lg font-medium text-black">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Bio Field */}
                <div className="mb-6">
                    <label htmlFor="bio" className="block text-lg font-medium text-black">
                        Bio
                    </label>
                    <textarea
                        id="bio"
                        rows="3"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-pink-700 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
                    >
                        Save Changes
                    </button>
                    <button
                        type="button"
                        className="bg-pink-700 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
