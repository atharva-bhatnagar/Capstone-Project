import './register.css'
import React from "react";

const Register=()=>{
    return(
        <div className="form-container">
            <form className="form">
                <h1>Register</h1>
                <div className="form-seg">
                    <label>UserName : </label>
                    <input type='text' name="username"/>
                </div>
                <div className="form-seg">
                    <label>Email : </label>
                    <input type='email' name="username"/>
                </div>
                <div className="form-seg">
                    <label>Set Password : </label>
                    <input type='password' name="username"/>
                </div>
                <p>Already Have an account? Go to the <em className="link">Login</em> page.</p>
                <button type='submit' className="submit-btn">Register</button>
                
            </form>
        </div>
    )
}
export default Register