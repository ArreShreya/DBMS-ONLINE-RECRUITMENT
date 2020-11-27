import React from "react"
import InputProfile_po from './InputProfile_po'
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"


const PlacementofficePage = ({match}) => {
    <Switch>
         <Route path={`${match.path}/createprofile`}  component={InputProfile_po} />
    </Switch>
    return(

        <div className = "PlacementofficePage">
            <div className="crpr mt-10">
            <Link to={`${match.path}/createprofile`}><button className="btn btn-success">Create Profile</button></Link>
            </div>
            
            <div>
            <Link to={`${match.path}/showprofile`}><button className="btn btn-success">Show Profile</button></Link>
            </div>

            <div>
            <Link to={`${match.path}/updateteprofile`}><button className="btn btn-success">Update Profile</button></Link>
            </div>

            <div>
            <Link to={`${match.path}/show-all-students`}><button className="btn btn-success">Show all Students</button></Link>
            </div>

            <div>
            <Link to={`${match.path}/show-all-company-students`}><button className="btn btn-success">Show Company Registered Students</button></Link>
            </div>

            <div>
            <Link to={`${match.path}/show-companies`}><button className="btn btn-success">Show Companies</button></Link>
            </div>
        </div>
    );
}

export default PlacementofficePage;