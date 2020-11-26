import React, {Fragment, useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"

const DiscussionForum = () => {

    const [discussions, setDiscussions] = useState([])
    const [stid, setStid] = useState("")
    const [name, setName] = useState("")
    const [diss, setDiss] = useState("")

    const onSubmitDiscussion = async(e) => {
        e.preventDefault();
        try {
            const body = {stid, name, diss}
            const res = await fetch("http://localhost:5000/discussion/:stid", { 
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }) 
            console.log(res)
            Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your view has been added to the discussion forum!',
                    showConfirmButton: false,
                    timer: 1500
                })
            
        } catch (err) {
            console.error(err.message)
        }
    }

    const getDiscussion = async() => {
        try {
            
            const res = await fetch("http://localhost:5000/discussions")
            const jsonData = await res.json();

            console.log(jsonData)

            setDiscussions(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getDiscussion();
    }, [])

    return(
        <Fragment>
            <br />
            <h2 className="text-center mt-2"><strong>Discussion Forum : </strong></h2>
            <br />

            <div className="container">
            <form action="POST"  class="needs-validation" novalidate onSubmit={onSubmitDiscussion}>
                <div class="form-group">
                    <label for="uid">User ID:</label>
                    <input type="text" class="form-control" id="uid" placeholder="Enter username" name="uid" required value = {stid} onChange={e => setStid(e.target.value)} required />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                
                <div class="form-group">
                    <label for="nam">Name:</label>
                    <input type="text" class="form-control" id="nam" placeholder="Enter Name" name="nam" required value = {name} onChange={e => setName(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                <div class="form-group">
                    <label for="dis">Discussion:</label>
                    <textarea class="form-control" rows="5" id="dis" placeholder="Enter Discussion" name="dis" required value={diss} onChange={e => setDiss(e.target.value)} ></textarea>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                {/* <div class="form-group">
                    <label for="comment">Comment:</label>
                    <textarea class="form-control" rows="5" id="dis" placeholder="Enter Discussion" name="dis" required value={diss} onChange={e => setDiss(e.target.value)} ></textarea>
                </div> */}

                <button className="btn btn-success">Submit</button>
            </form>
            </div>
            <div className="container text-right">
            <Link to={"/studentlogin/students"}><button className="goback"><span>Go to Studnets Page</span></button></Link>
            </div>
            <br />
            <br />
<div className="container-fluid p-3 my-3 bg-dark text-dark">
<table class="table table-light">
    <thead>
    <tr>
        <th>ID</th>
        <th>Views : </th>
        
    </tr>
    </thead>
    <br />
    <tbody>
    {discussions.map(discussionn => (
        <tr key={discussionn.id}>
            <td>
                {discussionn.id}
            </td>
            <td>
                {discussionn.discussion}
            </td>
        </tr> 
        
    ))}

</tbody>
        </table>

        </div>
        <br />
        

            <br />

        </Fragment>  
    );
}

export default DiscussionForum;