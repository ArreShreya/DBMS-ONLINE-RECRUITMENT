import React, {Fragment, useState} from "react"
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
import Placementoffice from './placeoffi_components/Placementoffice';

import InputProfile from "./stu_components/InputProfile";
import ListProfile from "./stu_components/ListProfile"
import UpdateProfile from "./stu_components/UpdateProfile";
import StudentLogin from "./StudentLogin";
import RoundDetails from "./stu_components/RoundDetails";
import CompanyRegistration from "./stu_components/CompanyRegistration";

//import CompanyRegistration2 from "./stu_components/CompanyRegistration2"

import DiscussionForum from "./stu_components/DiscussionForum";
import Feedback from "./stu_components/Feedback"
import PlacementOfficeLogin from "./PlacementOfficeLogin";
//import ListProfile_po from "./placeoffi_components/ListProfile_po"
import ShowProfile from "./placeoffi_components/ShowProfile"
import ShowAllStudents from "./placeoffi_components/ShowAllStudents"
//import ShowwCompany from "./placeoffi_components/ShowCompany"
import ShowCompanyStudents from "./placeoffi_components/ShowCompanyStudents"
import ShowCompany from "./placeoffi_components/ShowCompany";
import InputProfile_po from "./placeoffi_components/InputProfile_po";
import Feedback_po from "./placeoffi_components/Feedback_po"
import ShowPDF from "./placeoffi_components/ShowPDF"

import Companyhr from './companyHR_components/Company'
import GetProfile from "./companyHR_components/GetProfile";
import InputProfilecom from "./companyHR_components/InputProfile";
import Reg_student from "./companyHR_components/Reg_student"
import CompanyLogin from "./CompanyLogin";
import Feedback_comp from "./companyHR_components/Feedback_comp"

function App() {

  return (
    <Fragment>
      <Router>
        <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/404" component={NotFoundPage} />

        {/* <Route 
        exact 
        path={"/studentlogin" }
        render={props => (
          <StudentLogin {...props}  />
        )} /> */}
        
        {/* <Route 
        exact 
        path={"/studentlogin/students"}
        render={props => (
          <Student {...props} />
        )} /> */}

        <Route exact path="/studentlogin" component={StudentLogin} />
        <Route exact path="/placementofficelogin" component={PlacementOfficeLogin} />
        <Route exact path="/studentlogin/students" component={Student} />
        <Route exact path="/placementofficelogin/placementoffice" component={Placementoffice} />

        <Route exact path="/studentlogin/createprofile" component={InputProfile} />
        <Route exact path="/studentlogin/students/showprofile" component={ListProfile} />
        <Route exact path="/studentlogin/students/updateprofile" component={UpdateProfile} />

         {/* AAAAAAAAAAAAAAAA  */}
        <Route exact path="/studentlogin/students/companyregistration" component={CompanyRegistration} />

         {/* EEWWWWWWWWWWWWWWW */}
         {/* <Route exact path="/studentlogin/students/companyregistration" component={CompanyRegistration2} /> */}

        <Route exact path="/studentlogin/students/rounddetails" component={RoundDetails} />
        <Route exact path="/studentlogin/students/discussionforum" component={DiscussionForum} />
        <Route exact path="/studentlogin/students/feedback" component={Feedback} />

        <Route exact path="/placementofficelogin/createprofile" component={InputProfile_po} />
        <Route exact path="/placementofficelogin/placementoffice/showprofile" component={ShowProfile} />
        <Route exact path="/placementofficelogin/placementoffice/show-all-students" component={ShowAllStudents} />
        <Route exact path="/placementofficelogin/placementoffice/show-companies" component={ShowCompany} />
        <Route exact path="/placementofficelogin/placementoffice/show-all-company-students" component={ShowCompanyStudents} />
        <Route exact path="/placementofficelogin/placementoffice/feedback" component={Feedback_po} />
        <Route exact path="/placementofficelogin/placementoffice/getpdfs" component={ShowPDF} />


        <Route exact path="/companylogin" component={CompanyLogin} />
        <Route exact path="/companylogin/company" component={Companyhr} />
        <Route exact path="/companylogin/createprofile" component={InputProfilecom} />
        <Route exact path="/companylogin/company/showprofile" component={GetProfile} />
        <Route exact path="/companylogin/company/showregister_student" component={Reg_student} />
        <Route exact path="/companylogin/company/feedback" component={Feedback_comp} />

        <Redirect to="/404" />
        </Switch>
      </Router> 
    </Fragment>
  );
}
//import PlacementofficePage from "./placeoffi_components/Placementoffice";

export default App;
