import React, {Fragment} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

//import InputExtra from './stu_components/InputExtra'

const MainPage = () => {
    return(
        
        <Fragment>
            <br />
            <h1 className="text-center">Main page</h1>
            < br />
            <p className="text-center"><strong>Choose a role : </strong></p>
            <br />

            <div className="container text-center">
                <Link to="/studentlogin">
                    <button className="btn btn-success">Student</button>
                </Link>
            </div>

            < br/>

            <div className="container text-center">
                <Link to="/placementofficelogin">
                    <button className="btn btn-success">Placement Office</button>
                </Link>
            </div>

            <br />

            <div className="container text-center">
                <Link to="/company">
                    <button className="btn btn-success">Company</button>
                </Link>
            </div>
    
        </Fragment> 

    );
}

export default MainPage;