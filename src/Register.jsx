import React from "react";
import { Link } from "react-router-dom";
import {BiUser} from "react-icons/bi";
import { FaEnvelope } from 'react-icons/fa';
import {AiOutlineUnlock} from "react-icons/ai";

const Register = () => {
    return (

        <div className='text-white h-[100vh] flex justify-center items-center bg-cover'>
            <div className= "bg-purple-800 border border-slate-400 rounded-md p-10 shadow-lg backrop-filter backdrop-blur-sm bg-opacity-80 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-10">Register</h1>
                <form action="">
                <div className="relative my-8">
                    <input type="text" className="block w-72 py-2.8 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer" placeholder= ""/>
                    <label htmlFor="" className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Username</label>
                    <BiUser className="absolute top-1 right-2"/>
                </div>
                <div className="relative my-8">
                    <input type="email" className="block w-72 py-2.8 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer" placeholder= ""/>
                    <label htmlFor="" className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Your Email</label>
                    <FaEnvelope className="absolute top-1 right-2"/>
                </div>
                <div className="relative my-4">
                <input type= "password" className="block w-72 py-2.8 px-0 text-md text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-white-600 peer" placeholder= ""/>
                <label htmlFor="" className="absolute text-lg text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white-600 peer-focus:dark:text-white-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Set Password</label>
                <AiOutlineUnlock  className="absolute top-1 right-2"/>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="Remember me"> Remember me</label>
                    </div>
                </div>
                <button type="submit" className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-purple-800 font-bold hover:bg-pink-600 hover:text-white py-2 transition-colors"><Link to='/'> Register </Link></button>
                <div>
                    <span className="m-2">Already Have an Account? <Link className= "text-pink-200" to='/Login'>Login Here</Link></span>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Register;