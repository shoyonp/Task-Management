import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { googleLogin } = useAuth();
  //   const axisoPublic = useAxiosPublic();
  //   const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleLogin()
    .then(result =>{
        console.log(result);
    })
  };
  return (
    <div className="p-8">
      <div className="divider"></div>
      <div>
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle className="mr-2"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default Login;
