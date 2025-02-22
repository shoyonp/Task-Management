import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const { googleLogin } = useAuth();
  const axisoPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  const handleGoogleSignIn = () => {
    googleLogin().then((result) => {
      console.log(result);
      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName,
        userID: result?.user?.uid,
      };
      axisoPublic.post("/users", userInfo)
      .then((result) => {
        navigate(from, { replace: true });
      });
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome Back!
        </h2>
        <p className="text-gray-600 mb-6">
          Sign in to manage your tasks efficiently.
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 w-full px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          <FaGoogle className="text-lg" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
