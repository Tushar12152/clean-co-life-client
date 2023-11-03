import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
const {user,logOut}=useAuth()
// console.log(user);

const handleLogOut=()=>{
      logOut()
      .then(res=>{
           console.log(res);
      })
      .catch(err=>{
        console.log(err);
      })
      
}






  return (
    <div className="  w-full max-w-[1200px]  mx-auto  ">
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
           


        {
            user?.email? <button onClick={handleLogOut}>Logout</button>:
          
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          {" "}
          Login{" "}
        </NavLink>
}
      </div>
    </div>
  );
};

export default Navbar;
