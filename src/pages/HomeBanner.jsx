import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <Link to="/login"><button className="btn btn-warning  ">Get Started</button>
        </Link>
    </div>
  );
};

export default HomeBanner;
