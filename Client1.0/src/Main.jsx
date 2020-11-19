import React, {Fragment} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

//import InputExtra from './stu_components/InputExtra'

const MainPage = () => {
    return(
      
          <div>
            <h3>Welcome to react router tutorial</h3>
            <small>Main Page</small>
            <Link to="/students">
                <button className="btn btn-success">Student</button>
            </Link>
            <Link to="/placementoffice">
                <button className="btn btn-success">Placement Office</button>
            </Link>
            <Link to="/company">
                <button className="btn btn-success">Company</button>
            </Link>
        </div>   
    );
}

export default MainPage;