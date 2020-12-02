import React, {Fragment, useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"
import "./ExtraOnePla.css"

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
            <div className="container">
            <h2 className="text-center mt-2"><strong>Feedback : </strong></h2>
            </div>
            <br />

            <div className="container">
            <form action="POST"  class="needs-validation" novalidate onSubmit={onSubmitFeedback}>
                
                <div class="form-group">
                    <label for="nam">Name:</label>
                    <input type="text" class="form-control" id="nam" placeholder="Enter Name" name="nam" required value = {name} onChange={e => setName(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                <div class="form-group">
                    <label for="feed">Discussion:</label>
                    <textarea class="form-control" rows="5" id="feed" placeholder="Enter Discussion" name="feed" required value={feedback} onChange={e => setFeedback(e.target.value)} ></textarea>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                    <br />
                <button className="btn btn-outline-dark">Submit</button>
            </form>
            </div>
            <br />
            <br />
            <div className="container text-center">
            <Link to={"/placementofficelogin/placementoffice"}><button className="goback"><span>Go to Placement Office Page</span></button></Link>
        </div>

            <br />


            </div>
        </Fragment>
    );
}

export default Feedback;