import React,{useContext, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FolderContext } from '../Contexts/FolderContext';
function Register() {
    const email=useRef()
    const username=useRef()
    const confirm=useRef()
    const password=useRef()
    const navigate=useNavigate();
    // const[email,setEmail]=useState("");
    // const[password,setPassword]=useState("");
    const {isAuth,setIsAuth}=useContext(FolderContext);
    const validate=()=>{
        console.log("validate");
        var emailvalid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.current.value);
        var passValid=password.current.value.length>=8;
        var confirmValid=password.current.value==confirm.current.value;
        var usernameValid= username.current.value.length>2;
        return (emailvalid&&passValid&&confirmValid&&usernameValid);
               
        
    }
    var L=JSON.parse(localStorage.getItem("noteSignup"))||[1,2,3];
    var az="fdasf"
    L[email]={'a':'fasdf',"b":"erqwr"};
    console.log(L,"local");

    const SubmitLogin=(e)=>{
        console.log('submit');
        e.preventDefault();
        const valid=validate();
        if(valid){
            var local=JSON.parse(localStorage.getItem("noteSignup"))||{};
            
            local[email.current.value]={
                userEmail:email.current.value,
                userName:username.current.value,
                Password:password.current.value,
                confirmPass:confirm.current.value
            }
            localStorage.setItem('noteSignup',JSON.stringify(local));
            navigate('/');
        }else{
            alert("Something went wrong");
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
            <label >
                username
            <input type="text" ref={username} />
            </label>
            <label htmlFor="">
            Password
            <input type="password"  ref={password}/>
            </label>
            <label htmlFor="">
            Confirm Password
            <input type="password"  ref={confirm}/>
            </label>
            <button onClick={SubmitLogin}>Submit</button>
        </form>
        <button onClick={()=>navigate('/')}>Go to Login</button>
    </div>
    </div>
  )
}

export default Register