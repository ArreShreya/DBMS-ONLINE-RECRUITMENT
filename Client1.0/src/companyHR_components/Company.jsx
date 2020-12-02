import React, {Fragment, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./ExtraOneCom.css"

const CompanyPage =(props) =>{

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
              {/* <DropdownItem header>Header</DropdownItem> */}
              <DropdownItem disabled>Shreya : 6355141681</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              {/* <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div id="main">

            <br />
                <br />
                <div className="container text-center">
                <h1 class="comp-title" style={{color: '#3e5151'}} ><strong>Company HR Profile: </strong></h1>
                </div>
            <br />

            <div id="first" class="card">
             <br />

                <div className="container">
                   
                    <div>
                        <Link to={`${props.match.path}/showprofile`}>
                        <button type="button" class="btn btn-outline-dark">
                {/* <i class="fe-user mr-2"></i> */}
                <i class="fa fa-user" aria-hidden="true"> &nbsp; </i>
                {/* <i class="fe-edit"></i> */}
                 Show Profile
                </button>
                        </Link>
                    </div>
                    <br/>
                    <div>
                        <Link to={`${props.match.path}/showregister_student`}>
                        <button className="btn btn-outline-dark">
                <i class="fas fa-list-alt"> &nbsp; </i>
                Show Registered Students</button>
                        </Link>
                    </div>

                    <br />

                            <div className="container text-center">
                    <Link to={`${props.match.path}/feedback`}><button className="btn btn-outline-dark">
                        <i class="far fa-paper-plane"> &nbsp; </i>
                        Feedback</button></Link>
                    </div>
                    <br />

                    <div className="container text-center">
                    <Link to={"/companylogin"}><button className="logout"><span>LOG OUT</span></button></Link>
                    </div>


                    <br/>
                </div>

              </div>
        </div>

        </Fragment>
    )
}

export default CompanyPage;