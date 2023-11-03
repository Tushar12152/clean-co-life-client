import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible,  } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Register = () => {
    const [show,setShow]=useState(true)
    const {createUser}=useAuth()
    // console.log(user);

    const handleRegister=async(e)=>{
         e.preventDefault()
         const form=e.target;
         const email=form.email.value;
         const password=form.password.value;
        //  console.log(email,password);
        try{
            await createUser(email,password)
            console.log('done');
        }catch(err){
            console.log(err);
        }

    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold pb-5">Register Here</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">

         <input name="password" type={show?"text":"password"} placeholder="password" className="input input-bordered w-full" required />

         <span className="absolute top-4 right-1" onClick={()=>setShow(!show)}>{show?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>

         <span></span>
         </div>
          <label className="label">
              <p>Already Have An Account? please <Link to='/login' className="text-blue-300 ">Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;