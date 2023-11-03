import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="flex flex-col gap-6 ">
             <NavLink to="/about"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "btn bg-red-100 " : "btn"  }>  About </NavLink>

<NavLink to="/contact"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ?"btn bg-red-100 " : "btn"  }> Contact </NavLink>

<NavLink to="/login"  className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "btn bg-red-100 " : "btn" }>  Login </NavLink>
        </div>
    );
};

export default SideBar;