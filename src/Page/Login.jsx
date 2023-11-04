import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";


const Login = () => {

    const {login}=useAuth()
   
    const [show,setShow]=useState(true)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
     const navigate=useNavigate()
     const axios=useAxios()

    const handleLogin=async(e)=>{
        e.preventDefault()
       const load= toast.loading('logging in')
        // console.log(email,password);
       try{
           await login(email,password)
        //  const res=
         await axios.post('/auth/access-token',{email})
      // console.log(res.data);
           toast.success('logged in',{id:load})

           navigate('/')

       }catch (err){
           toast.error(err.message,{id:load})
       }
        
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required
          onBlur={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">

         <input type={show?"text":"password"} placeholder="password" className="input input-bordered w-full" required onBlur={(e)=>setPassword(e.target.value)} />

         <span className="absolute top-4 right-1" onClick={()=>setShow(!show)}>{show?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>

         <span></span>
         </div>
          <label className="label">
              <p>Have No Account? please <Link to='/register' className="text-blue-300 ">Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;