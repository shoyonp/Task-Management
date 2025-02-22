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
    <div className="flex justify-center items-center h-screen">
      <button onClick={handleGoogleSignIn} className="btn">
        <FaGoogle className="mr-2"></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default Login;
