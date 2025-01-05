import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

const MainLogin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); 
  };


  const handleLogin = (e) => {
    e.preventDefault(); 

    navigate("/");

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-dark-bg">
      <div className="bg-white p-8  rounded-lg shadow-lg w-[80%] lg:w-[30%]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">My Blogs</h2>
        <form onSubmit={handleLogin}>
          {/* Username input */}
          <div className="mb-4 relative">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FaUser className="ml-3 text-gray-400" size={20} />
              <input
                type="text"
                id="username"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 pl-5 mt-2 border-none rounded-lg focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Password input */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <FaLock className="ml-3 text-gray-400" size={20} />
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-5 mt-2 border-none rounded-lg focus:outline-none "
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 text-gray-400"
              >
                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MainLogin;
