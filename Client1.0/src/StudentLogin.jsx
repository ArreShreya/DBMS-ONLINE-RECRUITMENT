import React,{Fragment, useState } from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"
//import Button from '@material-ui/core/Button';
import "./ExtraOne.css"


const StudentLogin = (props) => {
    const [sid, setSid] = useState("")
    const [password, setPassword] = useState("")
    const [disable, setDisable] = useState("false")


    const onSubmitForm = async e => {
      e.preventDefault();
      try {
          const body = {sid, password}
          const submitLogin = await fetch("http://localhost:5000/login", {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify(body) 
          }).then(res => {
               return res.json()  
          })

          console.log(submitLogin);
          //console.log(props);

          if(submitLogin.stu_id){

            Swal.fire("Congrats!", "Successful Login", "success")

            props.history.push("/studentlogin/students")

            var student_id = submitLogin.stu_id;
            sessionStorage.setItem("studentID", student_id);
          }
          else{
            Swal.fire("Sorry!", "Incorrect credentials", "error")
          }

          console.log(submitLogin.stu_id)   

        } catch (err) {
          console.error(err.message)
        }
      }
    

  return (

    <Fragment>

      {/* <h1>Status: {props.loggedInStatus}</h1> */}
      <head>
    
      </head>
      <br />
      <h1 className="text-center">Student Login Page</h1>
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
          {/* <button className="btn btn-primary">LOGIN</button> */}
          <button className="login"><span>LOGIN</span></button>
         
        </form>
    </div>

  <br />
    {/* <div class="container"> */}
   
      {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Open modal
      </button> */}

{/*     
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
          

            {/* <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div> */}
            
          
            {/* <div class="modal-body">
              {
                false ? "Correct Login" : "Sorry!"
              }
            </div>
            
       
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
            
          </div>
        </div>
      </div>  */}
  
      {/* </div> */}


    
    <br />
    {/* <div className="container">
    <Link to={`${props.match.path}/students`}><button className="btn btn-success">Go to Student Profile</button></Link>
    </div>
    <br /> */}


    <div className="text-center">
          <h2>Sign Up : </h2>
        </div>

    <br />

    <div className="container text-center">
            <Link to={`${props.match.path}/createprofile`}><button className="button">Create Profile</button></Link>
    </div>
    <br/>
    <br />
     <div className="container text-center">
            <Link to={"/"}><button className="goback"><span>Go to Main page</span></button></Link>
    </div>
    <br />

    {
      disable ? null : <h1>Bello</h1>
      // <Link to={`${match.path}/students`}><button className="btn btn-success" disabled={disable} >Go to Student Profile</button></Link>
    }
    
    
    
    
</Fragment>
)

}

export default StudentLogin;