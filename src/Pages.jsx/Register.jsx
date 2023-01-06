import React,{useState} from 'react'

function Register() {
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
    <div>
         <div className='Auth-div'>
        <form className='user-form' action="">
            <h3>Sign up</h3>
            <label >
                Email
            <input type="text" onChange={userEmail}/>
            </label>
            <label htmlFor="">
            Username
            <input type="text" onChange={userPassword}/>
            </label>
            <label htmlFor="">
            Password
            <input type="text" onChange={userPassword}/>
            </label>
            <label htmlFor="">
            Confirm Password
            <input type="text" onChange={userPassword}/>
            </label>
            <button onClick={SubmitLogin}>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Register