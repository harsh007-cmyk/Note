import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
const useAuth=()=>{
    const user=localStorage.getItem('user-note');
    if(user)return true;
    else return false;

}

const AuthGuard=()=>{
   const bool=useAuth();
   return (bool?<Outlet/>:<Navigate to="/"/>);
   
}
    


export default AuthGuard