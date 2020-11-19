import React, {Fragment} from "react"
import './App.css';
//import Main from "./main";
//import InputProfile from "./stu_components/InputProfile";
//import { Link } from 'react-router';
//import Index from './index'
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

//PAGES
import MainPage from './Main'
import NotFoundPage from './404'
import Student from './stu_components/Student'
import Placementoffice from './placeoffi_components/Placementoffice'
import Companyhr from './companyHR_components/Company'
import InputProfile from "./stu_components/InputProfile";
import ListProfile from "./stu_components/ListProfile"
import UpdateProfile from "./stu_components/UpdateProfile"

function App() {
  return (
    <Fragment>
      {/* <div className="container" >  */}
      {/* <InputProfile /> */}
        {/* <header>
          This is my website
        </header>

        <main>
          {this.props.children}
        </main>

        <Link to = "/student">Click me</Link>

      </div> */}
      {/* <div className="container">Bello</div> */}

      <Router>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route exact path="/students" component={Student} />
        <Route exact path="/placementoffice" component={Placementoffice} />
        <Route exact path="/company" component={Companyhr} />
        <Route path="/students/createprofile" component={InputProfile} />
        <Route path="students/showprofile" component={ListProfile} />
        <Route path="students/updateprofile" component={UpdateProfile} />
        <Redirect to="/404" />
        </Switch>
      </Router>

      
    </Fragment>
  );
}
//import PlacementofficePage from "./placeoffi_components/Placementoffice";

export default App;
