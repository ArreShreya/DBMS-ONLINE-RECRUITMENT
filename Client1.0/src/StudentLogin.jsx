import React,{Fragment, useState } from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"
//import Button from '@material-ui/core/Button';
// import "./ExtraOne.css"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./LoginPage.css"


const StudentLogin = (props) => {
    const [sid, setSid] = useState("")
    const [password, setPassword] = useState("")
   // const [disable, setDisable] = useState("false")
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const onMouseEnterFun = () => {
      setDropdownOpen(true);
    }
  
    const onMouseLeaveFun = () => {
      setDropdownOpen(false);
    }  

    const togglee = () => {
      setDropdownOpen(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }


    const onSubmitForm = async e => {
      e.preventDefault();
      try {
          const body = {sid, password}
          const submitLogin = await fetch("http://localhost:5000/student/loginpage", {
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
            localStorage.setItem("studentID", student_id);
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

<div id="loginpage">

      <div class="title">
      <h1 class="hone"><strong>Student Login Page</strong></h1>

      <div class="second">

      {/* <Dropdown  onMouseOver={onMouseEnterFun} onMouseLeave={onMouseLeaveFun} isOpen={dropdownOpen} toggle={togglee}>
        <DropdownToggle caret>
          Contact us &nbsp;
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem disabled>Shreya : 6355141681</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
      </div>
      </div>
      <br />
        
        <br/>
        
        <div className="container text-center">
          <h2 class="login-hone">Login : </h2>
          <small class="login-hone">Enter The appropriate credentials</small>
        </div>
     <div className="container">
     <form action="POST" onSubmit={onSubmitForm}>
            <div >
              <label for="uid">User ID:</label>
              <input type="text" className="form-control" id="uid" placeholder="Enter username" name="uid" required value = {sid} onChange={e => setSid(e.target.value)} />
            </div>
            <div>
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required value = {password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <br />
          {/* <button className="btn btn-primary">LOGIN</button> */}

         <div>
          <button className="login"><span>LOGIN</span></button>
          </div>
          
         
        </form>
    </div>

  <br /> 
    <br />

    <br />

    <div className="container text-center">
            <Link to={`${props.match.path}/createprofile`}><button className="btn btn-outline-secondary"> &nbsp; Sign Up &nbsp;</button></Link>
    </div>
    <br/>
    <br />
     <div className="container text-center">
            <Link to={"/"}><button className="goback"><span>Go to Main page</span></button></Link>
    </div>
    <br />
    
    
    </div>
    
</Fragment>
)

}

export default StudentLogin;