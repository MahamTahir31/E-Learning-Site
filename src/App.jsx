import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Layout from './Layout';
import Home from './components/home/Home';
import Progress from './components/Progress/Progress';
import Courses from './components/Courses/Courses';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import { ProfileContext } from './Contexts/ProfileContext'; // Import ProfileContext

function App() {
  // Initial state for profile data
  const [profile, setProfile] = useState({
    name: 'Maham Tahir',
    email: 'maham@example.com',
    bio: 'Frontend Developer | React | MERN Stack',
  });

  // Data for progress and courses (you already have this part)
  const courseData = {
    totalModules: 10,
  };

  const handleCompletion = () => {
    console.log('Course completed!');
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <div>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="Progress" element={<Progress courseData={courseData} onCompletion={handleCompletion} />} />
            <Route path="Courses" element={<Courses />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="EditProfile" element={<EditProfile />} />
          </Route>
        </Routes>
      </div>
    </ProfileContext.Provider>
  );
}

export default App;
