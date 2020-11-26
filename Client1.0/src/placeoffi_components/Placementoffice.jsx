import React from "react"
import InputProfile_po from './InputProfile_po'
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"


const PlacementofficePage = ({match}) => {
    
    return(

        <div className = "container">
            <br />
            <h1 className="text-center"><strong>Placement Office Profile : </strong></h1>
            <br />
            <br />
            <div className="container text-center">
            <Link to={`${match.path}/showprofile`}><button className="btn btn-success">Show Profile</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${match.path}/show-all-students`}><button className="btn btn-success">Show all Students</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${match.path}/show-all-company-students`}><button className="btn btn-success">Show Company Registered Students</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${match.path}/show-companies`}><button className="btn btn-success">Show Companies</button></Link>
            </div>
            <br />

            <div className="container text-center">
            <Link to={`${match.path}/feedback`}><button className="btn btn-success">Feedback</button></Link>
            </div>
            <br />

            <div className="container text-center">
            <Link to={`${match.path}/getpdfs`}><button className="btn btn-success">Students' Resume</button></Link>
            </div>
            <br />

            <div className="container text-center">
            <Link to={"/placementofficelogin"}><button className="btn btn-primary">LOG OUT</button></Link>
            </div>
        </div>
    );
}

export default PlacementofficePage;