import { Link } from "react-router-dom";
import image from "../assets/wallpaperflare.com_wallpaper (12).jpg"
const HomeBanner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-6 text-center bg-gradient-to-r from-blue-100 via-white to-gray-100">
      
      {/* Content */}
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Stay Organized & Boost Productivity
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A simple and efficient task management tool to help you 
          stay focused and achieve more every day.
        </p>

        {/* Button */}
        <Link to="/login">
          <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>

      {/* Image */}
      <img 
        src={image}
        alt="Task Management" 
        className="mt-8 w-full max-w-lg rounded-md shadow-md"
      />
    </div>
  );
};

export default HomeBanner;
