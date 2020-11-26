import React , {Fragment,useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

const InputProfilecom =  () => {
    const[cid,setCid] =useState("")
    const[cname,setCname]=useState("")
    const[password,setPassword]=useState("")
    const[cpi,setCpi]=useState("")
    const[contact,setContact]=useState("")
    const[job,setJob]=useState("")
    const[pkg,setPkg]=useState("")

    const onSubmitProfile= async e =>{
        e.preventDefault();
        try {
            const body ={cid,cname,password,cpi,contact,job,pkg}
            // `http://localhost:5000/todos/${todo.todo_id}`
            const res= await fetch(`http://localhost:5000/company/temp/createprofile`,   {
                method:"POST",
                headers:{"content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            console.log(res)
        } catch (err) {
            console.log(err.message)
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5">Create Profile</h1>
            <div className="container">
                 <form action="/action_page.php"  class="needs-validation" novalidate onSubmit={onSubmitProfile}>
                <div className="form-group">
                    <label for="uid">User ID</label>
                    <input type="text" class="form-control" id="uid" placeholder="Enter userid" name="uid" required value={cid} onChange={e=>setCid(e.target.value)} required/> 
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter company name" name="name" required value={cname} onChange={e=>setCname(e.target.value)} required/> 
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required value = {password} onChange={e => setPassword(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="cpi">CPI_criteria</label>
                    <input type="text" class="form-control" id="cpi" placeholder="Enter cpi criteria" name="cpi" required value={cpi} onChange={e=>setCpi(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="con">Contact</label>
                    <input type="text" class="form-control" id="con" placeholder="Enter contact number" name="con" required value={contact} onChange={e=>setContact(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="job">Job description</label>
                    <input type="text" class="form-control" id="job" placeholder="Enter job description" name="job" required value={job} onChange={e=>setJob(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                    <label for="pkg">Package</label>
                    <input type="text" class="form-control" id="pkg" placeholder="Enter Annual Income details" name="pkg" required value={pkg} onChange={e=>setPkg(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
            </div>
        </Fragment>
    )
} 
export default InputProfilecom;