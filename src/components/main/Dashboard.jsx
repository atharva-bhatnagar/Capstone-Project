import Barchart from "./Barchart";
import React from "react";
import Piechart from "./Piechart";


const Dashboard=()=>{
    return(
        <div className="dashboard">
            <span className="page-info">
                <h1>Page Name</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, accusamus? Perferendis s
                    imilique nihil doloremque dolores voluptate. Esse fuga veniam, deleniti rem consectetur earum. Sint
                     beatae temporibus obcaecati saepe doloribus excepturi aliquam laboriosam facilis mollitia assumenda sapiente possimus 
                     fugit ea eveniet, placeat odio alias libero nostrum rem! Voluptas vel officia laboriosam beatae? Velit incidunt nobis au
                     t doloremque maxime corporis aspernatur vel.
                </p>
            </span>
            <span className="content-container">
                <div className="card-container">
                    <div className="text-card">
                        <h1>0</h1>
                        <p>Transactions</p>
                    </div>
                    <div className="text-card">
                        <h1>0</h1>
                        <p>Customers</p>
                    </div>
                    <div className="text-card">
                        <h1>0</h1>
                        <p>Revenue</p>
                    </div>
                    <div className="text-card">
                        <h1>0</h1>
                        <p>Expenditure</p>
                    </div>
                </div>
                <div className="stats">
                    <div className="chart-con">
                        <h1>Profit loss chart</h1>
                        <Barchart/>
                    </div>
                    
                    <div className="chart-con">
                        <h1>Profit loss chart</h1>
                        <Piechart/>
                    </div>
                    
                </div>
                <div className="customer-dash">
                    <h1 className="cust-head">Customer list</h1>
                    <div className="customer-card-head">
                        <h3>NAME:</h3>
                        <h3>EMAIL:</h3>
                        <h3>TYPE:</h3>
                    </div>
                    <div className="customer-card">
                        <h3>John smilga</h3>
                        <p>johnsmilga@gmail.com</p>
                        <p>Regular</p>
                    </div>
                    <div className="customer-card">
                        <h3>John smilga</h3>
                        <p>johnsmilga@gmail.com</p>
                        <p>Regular</p>
                    </div>
                </div>
                
            </span>
            
        </div>
    )
}
export default Dashboard