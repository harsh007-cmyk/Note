import React,{useContext, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
function Register() {
    const email=useRef()
    const username=useRef()
    const confirm=useRef()
    const password=useRef()
    const navigate=useNavigate();
    const validate=()=>{
        console.log("validate");
        var emailvalid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value);
        var passValid=password.current.value.length>=8;
        var confirmValid=password.current.value==confirm.current.value;
        return (emailvalid&&passValid&&confirmValid);
               
        
    }
    

    const SubmitReg=(e)=>{
        console.log('submit');
        e.preventDefault();
        const valid=validate();
        if(valid){
            var local=JSON.parse(localStorage.getItem("noteSignup"))||{};
            
            local[email.current.value]={
                userEmail:email.current.value,
                Password:password.current.value,
                confirmPass:confirm.current.value
            }
            localStorage.setItem('noteSignup',JSON.stringify(local));
            navigate('/');
        }else{
            alert("Password must contain atleast 8 characters, password and confirm password should be similar");
        }
    }
   
    

  return (
    <div>
         <div className='Auth-div'>
        <form className='user-form' action="">
            <h3>Sign up</h3>
            <label >
                Email
            <input type="email" ref={email} />
            </label>
            <label htmlFor="">
            Password
            <input type="password"  ref={password}/>
            </label>
            <label htmlFor="">
            Confirm Password
            <input type="password"  ref={confirm}/>
            </label>
            <button onClick={SubmitReg}>Submit</button>
        </form>
        <button onClick={()=>navigate('/')}>Go to Login</button>
    </div>
    </div>
  )
}

export default Register