import React from "react";
import Navbar from "./Navbar";
import './main.css'
import Dashboard from "./Dashboard";

const Main=()=>{
    return(
        <div className="main">
            <Navbar/>
            <Dashboard/>
        </div>
    )
}
export default Main