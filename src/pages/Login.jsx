import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleLogin } = useAuth();
  //   const axisoPublic = useAxiosPublic();
  //   const navigate = useNavigate();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  const handleGoogleSignIn = () => {
    googleLogin()
    .then((result) => {
      console.log(result);
      navigate(from, { replace: true });
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
