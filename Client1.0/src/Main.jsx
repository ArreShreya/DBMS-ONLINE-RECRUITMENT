import React, {Fragment} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./MainPage.css"


const MainPage = () => {
    return(
        
        <Fragment>
            <div class="page">
            <br />
            <br />
            <div class="containermain">
            <h1 class="main-title"><strong>Online Recruitment System</strong></h1>
            <br/>
            <br/>
            <p class="sub"><strong>Choose a role : </strong></p>

           
           
                <Link to="/studentlogin">
                    <button className="btn btn-primary btn-lg"><span>Student</span></button>
                </Link>
        

            < br/>
            <br/>
         
                <Link to="/placementofficelogin">
                    <button className="btn btn-primary btn-lg"><span>Placement Office</span></button>
                </Link>
          
            <br/>
            <br />

         
                <Link to="/companylogin">
                    <button className="btn btn-primary btn-lg"><span>Company</span></button>
                </Link>
    
       
            </div>

            <div class="decoration right bottom scale-2">
                    <svg fill=" #e03865" xmlns="http://www.w3.org/2000/svg"
                    width="30%" height="30%" viewBox="-10 -10 68 68">
                    <circle cx="24" cy="24" r="34" >
                    </circle>

                    <text class="write" x="2" y="20" style={{fill:'white'}}>
                        <tspan class="thank" x="2" y="15">Thank you so much for</tspan>
                        <tspan class="thank" x="1" y="21" > using our website!</tspan>
                    </text>

                    <div class="decoration2">
                        <svg fill="#f05053" xmlns="http://www.w3.org/2000/svg"
                            width="30%" height="30%" viewBox="-10 -10 68 68">
                            <circle cx="24" cy="24" r="34" ></circle>
                            <text class="write" x="2" y="20" style={{fill:'black'}}>
                                <tspan class="thank" x="2" y="15">Thank you so much for</tspan>
                                <tspan class="thank" x="1" y="21" > using our website!</tspan>
                            </text>
                        </svg>
                    </div>
                </svg>
            </div>


        </div>

        <div class="new">
            {/* <h1>EHHH</h1> */}

            {/* <svg width="100" height="100"> */}
            {/* <circle cx="50" cy="50" r="50" /> */}
            {/* <path d="M0,50 a1,1 0 0,0 100,0" fill="blue" />
            </svg> */}

                <svg fill=" #e03865" xmlns="http://www.w3.org/2000/svg"
                    width="100%" height="70%" viewBox="-10 -10 68 68">
                    <circle cx="50" cy="20" r="50" fill="#111111" >
                    </circle>

                    <text class="write" x="2" y="20" style={{fill:'#7FDBFF'}}>
                        <tspan class="about" x="8" y="10">About us:</tspan>
                        <tspan class="thank" x="4" y="21" >This website is made under the </tspan>
                        <tspan class="thank" x="4" y="27" >course IT-214</tspan>
                        <tspan class="thank" x="5" y="33" >by the members of </tspan>
                        <tspan class="thank" x="7" y="39" >section-8 group-7 </tspan>
                    </text>

                    <div class="decoration2">
                        <svg fill="#f05053" xmlns="http://www.w3.org/2000/svg"
                            width="31%" height="10%" viewBox="-10 -10 68 68">
                            <circle cx="24" cy="24" r="34" ></circle>
                        </svg>
                    </div>
                </svg>

        </div>
            

    
        </Fragment> 

    );
}

export default MainPage;