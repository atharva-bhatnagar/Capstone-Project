import React from "react";

const Login=()=>{
    return(
        <div>
            <div className="form-container">
            <form className="form">
                <h1>Login</h1>
                <div className="form-seg">
                    <label>UserName : </label>
                    <input type='text' name="username"/>
                </div>
                <div className="form-seg">
                    <label>Password : </label>
                    <input type='password' name="username"/>
                </div>
                <p>Don't Have an account? Go to the <em className="link">Register</em> page.</p>
                <button type='submit' className="submit-btn">Login</button>
                
            </form>
        </div>
        </div>
    )
}
export default Login