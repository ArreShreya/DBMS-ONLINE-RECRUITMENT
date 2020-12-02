import React, {Fragment, useState} from "react"
import InputProfile_po from './InputProfile_po'
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOnePla.css"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const PlacementofficePage = ({match}) => {

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
            <h1 class="comp-title" style={{color: '#3e5151'}} ><strong>Placement Office Profile: </strong></h1>
            </div>
        <br />
        <div id="first" class="card">
             <br />

            <div className="container">
            <Link to={`${match.path}/showprofile`}><button type="button" class="btn btn-outline-dark">
                {/* <i class="fe-user mr-2"></i> */}
                <i class="fa fa-user" aria-hidden="true"> &nbsp; </i>
                {/* <i class="fe-edit"></i> */}
                 Show Profile
                </button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${match.path}/show-all-students`}><button className="btn btn-outline-dark">
                <i class="fas fa-list-alt"> &nbsp; </i>
                Show All Students</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${match.path}/show-all-company-students`}><button className="btn btn-outline-dark">
                <i class="fas fa-list-alt"> &nbsp; </i>
                Company Registered Students</button></Link>
            </div>

            <br />

            <div className="container text-center">
            <Link to={`${match.path}/show-companies`}><button className="btn btn-outline-dark">
            <i class="material-icons"  >computer &nbsp;</i>
                Show Companies</button></Link>
            </div>
            <br />

            <div className="container text-center">
            <Link to={`${match.path}/feedback`}><button className="btn btn-outline-dark">
                <i class="far fa-paper-plane"> &nbsp; </i>
                Feedback</button></Link>
            </div>
            <br />

            {/* <div className="container text-center">
            <Link to={`${match.path}/getpdfs`}><button className="btn btn-outline-dark">
                <i class="fas fa-file">&nbsp;</i>
                Students' Resume</button></Link>
            </div>
            <br /> */}

            <div className="container text-center">
            <Link to={"/placementofficelogin"}><button className="logout"><span>LOG OUT</span></button></Link>
            </div>
            <br/>
        </div>

    </div>
        </Fragment>
    );
}

export default PlacementofficePage;