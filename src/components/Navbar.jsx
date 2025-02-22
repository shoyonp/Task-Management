import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userSignOut } = useAuth();
  const links = (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/home/addTask">Add Task</NavLink>
    </>
  );

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Logout success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="navbar bg-base-100 mx-auto px-5 md:px-12  lg:px-16">
      <div className="flex-1">
        <Link to="/home" className="text-xl font-bold">Task Nest</Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt={user.displayName}
                src={user.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
          >
            {links}
            <a onClick={handleSignOut}>Logout</a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
