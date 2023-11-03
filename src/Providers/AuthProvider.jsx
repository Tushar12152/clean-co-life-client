import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";
import { PropTypes } from 'prop-types';


 export const AuthContext=createContext(null)


const AuthProvider = ({children}) => {

      const [user,setUser]=useState(null)
      const [loading,setLoading]=useState(true)



    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
               setUser(currentUser)
               setLoading(false)
        })

        return ()=>{
             return unSubscribe()
        }
    },[])




    const authInfo={
        createUser,
        user,
        loading,
        login,
        logOut,
        


    }

    return (
        <AuthContext.Provider  value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node,
}

export default AuthProvider;
