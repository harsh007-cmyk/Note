import React,{useState} from 'react'

function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const SubmitLogin=(e)=>{
        e.preventDefault();
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
                Username/Email
            <input type="text" onChange={userEmail} value={email}/>
            </label>
            <label htmlFor="">
                Password
            <input type="text" onChange={userPassword} value={password}/>
            </label>
            <button onClick={SubmitLogin}>Submit</button>
        </form>
    </div>
  )
}

export default Login