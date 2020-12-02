import React, {Fragment, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOne.css"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const StudentPage = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const onMouseEnterFun = () => {
        setDropdownOpen(true);
      }
    
      const onMouseLeaveFun = () => {
        setDropdownOpen(false);
      }  
  
      const togglee = () => {
        setDropdownOpen(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

    return(
        <Fragment>
        <div id="sidebar">
          <Dropdown  onMouseOver={onMouseEnterFun} onMouseLeave={onMouseLeaveFun} isOpen={dropdownOpen} toggle={togglee}>
          <DropdownToggle caret>
            Contact us :p &nbsp;
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem disabled>Shreya : 6355141681</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>

        <div id="main">
            <br />
            <br />
              <div className="container text-center">
              <h1 class="comp-title" style={{color: '#3e5151'}} ><strong>Student Profile: </strong></h1>
              </div>
              <br />
              <div id="first" class="card">
                  <br />

                  <div className="container">
                      <Link to={`${props.match.path}/showprofile`}><button type="button" class="btn btn-outline-dark">
                      {/* <i class="fe-user mr-2"></i> */}
                      <i class="fa fa-user" aria-hidden="true"> &nbsp; </i>
                      {/* <i class="fe-edit"></i> */}
                      Show Profile
                      </button>
                      </Link>
                  </div>
                  
                  <br />

                  <div className="container">
                      <Link to={`${props.match.path}/companyregistration`}><button className="btn btn-outline-dark">
                          <i class="fas fa-edit"> &nbsp; </i>
                          Company Registration</button></Link>
                  </div>

                  <br />

                  <div className="container ">
                  <Link to={`${props.match.path}/rounddetails`}><button className="btn btn-outline-dark">
                      <i class="fas fa-list-alt"> &nbsp; </i>
                      Round Details</button></Link>
                  </div>

                  <br />

                  <div className="container">
                  <Link to={`${props.match.path}/discussionforum`}><button className="btn btn-outline-dark">
                      <i class="fas fa-paperclip"> &nbsp; </i>
                      Discussion Forum</button></Link>
                  </div>

                  <br />

                  <div className="container">
                  <Link to={`${props.match.path}/feedback`}><button className="btn btn-outline-dark">
                      <i class="far fa-paper-plane"> &nbsp; </i>
                      Feedback</button></Link>
                  </div>

                  <br />

                  <div className="container">
                  <Link to={"/studentlogin"}><button className="logout"><span>LOG OUT</span></button></Link>
                  </div>
                  <br />
              </div>
    
        
        </div>

        </Fragment>
    );
}

export default StudentPage;