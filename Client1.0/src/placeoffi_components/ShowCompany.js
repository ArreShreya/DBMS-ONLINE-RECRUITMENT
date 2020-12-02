import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOnePla.css"

function ShowCompany() {
    
        const [companies, setCompanies] = useState([])

    
        const getCompanies = async() => {
            try {
                
                const res = await fetch("http://localhost:5000/placementoffice/temp/listCompanies")
                const jsonData = await res.json();
    
                console.log(jsonData)
    
                setCompanies(jsonData)
    
            } catch (err) {
                console.error(err.message)
            }
        }
    
        useEffect(() => {
            getCompanies();
        },[])
    
        return(
            <Fragment>
                <div id="show">
                <br />
                <h2 className="text-center"><strong> List of Companies Registered : </strong></h2>
                <br />

            <div className="container">
            <table class="table table-bordered table-white">
                <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>CPI CRITERIA</th>
                    <th>CONTACT DETAILS</th>
                    <th>JOB DETAILS</th>
                    <th>PACKAGE</th>                    
                </tr>
                </thead>
                <br />
                <tbody>
    
                {companies.map(company => (
                    <tr>
                    <td>
                        {company.company_id}
                    </td>
                    <td>
                        {company.company_name}
                    </td>
                    

                    <td>
                        {company.cpi_criteria}
                    </td>
                    <td>
                        {company.contact_details}
                    </td>
                    <td>
                        {company.job_description}
                    </td>
                    <td>
                        {company.package}
                    </td>
                    
                </tr>

                ))
            }
            
                </tbody>
            </table>
    
            </div>
            <br />

        <div className="container text-center">
            <Link to={"/placementofficelogin/placementoffice"}><button className="goback"><span>Go to Placement Office Page</span></button></Link>
        </div>

            <br />

            </div>
        </Fragment>
            
        );      
    
}

export default ShowCompany
