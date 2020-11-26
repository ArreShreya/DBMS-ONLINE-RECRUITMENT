import React from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

const CompanyPage =(props) =>{
    return(
        <div className="container">
            <br/>
            <div>
                <Link to={`${props.match.path}/showprofile`}>
                    <button className="btn btn-success">Show Profile</button>
                </Link>
            </div>
            <br/>
            <div>
                <Link to={`${props.match.path}/showregister_student`}>
                    <button className="btn btn-success">Show Registered Student</button>
                </Link>
            </div>
        </div>
    )
}

export default CompanyPage;