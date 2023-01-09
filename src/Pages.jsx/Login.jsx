import React,{useContext, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { FolderContext } from '../Contexts/FolderContext';
function Login() {
    
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const{email,setEmail,setIsAuth}=useContext(FolderContext);

    const SubmitLogin=(e)=>{
         
        e.preventDefault();
       var userObj=JSON.parse(localStorage.getItem("noteSignup"));
       if(!email)return;
       if(!userObj){
        alert("Please create Account");
        return;
       }
        const userDetails=userObj[email]; 
       if(!userDetails){
        alert('Please create Account')
        return;
       }
       try{
        if((userDetails.userEmail===email)&&(userDetails.Password==password)){
            setIsAuth(true);
            navigate('/Folders');
            localStorage.setItem('user-note','logedin')
           }else{
            alert("incorrect credentials")
           }
       }catch(err){
            alert("Error has occured")
          
       }
       
    }
    const userEmail=(e)=>{
        setEmail(e.target.value);
    }
    const userPassword=(e)=>{
        setPassword(e.target.value);
    }
    
    return (
    <div className='Auth-div'>
        <form className='user-form' action="">
            <h3>Login</h3>
            <label >
               Email
            <input type="text"  onChange={userEmail} value={email}/>
            </label>
            <label htmlFor="">
                Password
            <input type="text" onChange={userPassword} value={password}/>
            </label>
            
            <button onClick={SubmitLogin}>Submit</button>
        </form>
        <button onClick={()=>navigate('/SignUP')}>Create account</button>
    </div>
  )
}

export default Login