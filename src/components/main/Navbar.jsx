import React from "react";

const Navbar=()=>{
    return(
        <div className="nav-container">
            <nav className="nav">
                <h1 className="hello-admin">Hello Admin!!!</h1>
                <span className="link-container">
                    <h3 className="nav-link">Dashboard</h3>
                    <h3 className="nav-link">Transactions</h3>
                    <h3 className="nav-link">Customers</h3>
                </span>
                <button className="logout">Logout</button>
            </nav>
            
        </div>
    )
}
export default Navbar