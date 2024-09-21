import React, { createContext, useState } from "react";


export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState({
        name: "Maham Tahir",
        email: "maham@example.com",
        bio: "Frontend Developer | React | MERN Stack"
    });

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};
