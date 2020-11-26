import React,{Fragment, useState } from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"
import "./ExtraOne.css"

function PlacementOfficeLogin(props) {
    
        const [sid, setSid] = useState("")
        const [password, setPassword] = useState("")
        const [disable, setDisable] = useState("false")
    
    
        const onSubmitForm = async e => {
          e.preventDefault();
          try {
              const body = {sid, password}
              const submitLogin = await fetch("http://localhost:5000/placementoffice/login", {
                  method: "POST",
                  headers: {"Content-Type": "application/json"},
                  body: JSON.stringify(body)
              }).then(res => {
                  return res.json();
              })
    
              if(submitLogin.placement_id){
                Swal.fire("Congrats!", "Successful Login", "success")

                props.history.push("/placementofficelogin/placementoffice")
                
              }
              else{
                Swal.fire("Sorry!", "Incorrect credentials", "error")
              }
    
              var placement_id = submitLogin.placement_id;
              sessionStorage.setItem("PlacementID", placement_id);
    
              console.log(submitLogin.placement_id)
    
            } catch (err) {
              console.error(err.message)
            }
          }
          
        
      return (
        <Fragment>
          <br />
          <h1 className="text-center">PlacementOfficer Login Page</h1>
            <br />

            <div className="text-center">
          <h2>Login : </h2>
          <small>Enter The appropriate credentials</small>
        </div>
         <div className="container">
         <form action="POST" onSubmit={onSubmitForm}>
                <div>
                  <label for="uid">User ID:</label>
                  <input type="text" className="form-control" id="uid" placeholder="Enter username" name="uid" required value = {sid} onChange={e => setSid(e.target.value)} />
                </div>
                <div>
                <label for="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required value = {password} onChange={e => setPassword(e.target.value)}/>
              </div>
              <br />
              <button className="login"><span>Login</span></button>
            </form>
        </div>

        <br />
        {/* <div className="container">
        <Link to={`${match.path}/placementoffice`}><button className="btn btn-success">Go to Placementoffice Profile</button></Link>
        </div> */}
        <br />
    
    
        <div className="text-center">
              <h2>Sign Up : </h2>
            </div>
    
        <br />
    
        <div className="container text-center">
                <Link to={`${props.match.path}/createprofile`}><button className="btn btn-success">Create Profile</button></Link>
        </div>
    
        <br/>
    <br />
     <div className="container text-center">
            <Link to={"/"}><button className="btn btn-info">Go to Main page</button></Link>
    </div>
    <br />
    
        
        
        
    </Fragment>
    )
}

export default PlacementOfficeLogin;
