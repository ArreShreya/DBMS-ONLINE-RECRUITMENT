import React, {Fragment} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "../ExtraOne.css"

const StudentPage = (props) => {

    return(
        <Fragment>
        <div className="container">
             <br />
            <h1 className="text-center"><strong>Student Profile : </strong></h1>
            <br />
            <br />
            <div className="container text-center">
            <Link to={`${props.match.path}/showprofile`}><button className="btn btn-success">Show Profile</button></Link>
            </div>
            {/* <br />
            <div>
            <Link to={`${match.path}/updateprofile`}><button className="btn btn-success">Update Profile</button></Link>
            </div> */}
            <br />

            <div className="container text-center">
            <Link to={`${props.match.path}/companyregistration`}><button className="btn btn-success">Company Registration</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${props.match.path}/rounddetails`}><button className="btn btn-success">Round Details</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${props.match.path}/discussionforum`}><button className="btn btn-success">Discussion Forum</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${props.match.path}/feedback`}><button className="btn btn-success">Feedback</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={"/studentlogin"}><button className="logout"><span>LOG OUT</span></button></Link>
            </div>
        </div>
        </Fragment>
    );
}

export default StudentPage;