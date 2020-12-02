import React, {Fragment, useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"
import "./ExtraOne.css"


const Feedback = () => {

    const [name, setName] = useState("")
    const [feedback, setFeedback] = useState("")

    const onSubmitFeedback = async(e) => {
    e.preventDefault();
        try {
            const body = {name, feedback}
            const res = await fetch(`http://localhost:5000/feedbacks/${name}`, { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }) 
            console.log(res)
            Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your valueable feedback has been submitted :)',
                    showConfirmButton: false,
                    timer: 1500
                })
            
        } catch (err) {
            console.error(err.message)
        }
}

    return(
        <Fragment>
            <div id="feedbackid">
            <br />
            <div className="container text-center">
        <h1 class="comp-title" ><strong>Feedback: </strong></h1>
        </div>
            <br />

            <div className="container">
            <form action="POST"  class="needs-validation" novalidate onSubmit={onSubmitFeedback}>
                
                <div class="form-group text-left">
                    <label for="nam">Name:</label>
                    <input type="text" class="form-control" id="nam" placeholder="Enter Name" name="nam" required value = {name} onChange={e => setName(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                <div class="form-group text-left">
                    <label for="feed">Discussion:</label>
                    <textarea class="form-control" rows="5" id="feed" placeholder="Enter Discussion" name="feed" required value={feedback} onChange={e => setFeedback(e.target.value)} ></textarea>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                    <br />

                <div className="text-left">
                <button className="btn btn-outline-dark">Submit</button>
                </div>
            </form>
            </div>
            <br />
            <br />
            <div className="container text-center">
            <Link to={"/studentlogin/students"}><button className="goback"><span>Go to Studnets Page</span></button></Link>
        </div>

            <br />
            </div>
        </Fragment>
    );
}

export default Feedback;