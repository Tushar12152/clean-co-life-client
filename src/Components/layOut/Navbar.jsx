import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="  w-full max-w-[1200px] px-[25px] mx-auto  ">
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className=" flex gap-6">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          {" "}
          About{" "}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          {" "}
          Contact{" "}
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          {" "}
          Login{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
