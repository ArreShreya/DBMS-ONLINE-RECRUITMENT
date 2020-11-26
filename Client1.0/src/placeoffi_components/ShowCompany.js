import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

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
                <br />
                <h2 className="text-center"><strong> List of Companies Registered : </strong></h2>
                <br />

            <div className="container-fluid p-3 my-3 bg-dark text-white">
            <table class="table table-dark table-striped text-center">
                <thead>
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
                {/*{students.map(student => (
                    <tr key={student.stu_id}>
                        <td>
                            {student.stu_id}
                        </td>
                    </tr> 
                    
                ))} */}
    
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
            {/*
                {students.map(student => (
                    <tr>
                    
                    <td>
                        {student.cpi}
                    </td>
                </tr>
                ))}
    
    
                {students.map(student => (
                    <tr>
                   
                    <td>
                        {student.email}
                    </td>
                    </tr>
                ))}

                {students.map(student => (
                    <tr>
                   
                    <td>
                    {student.placed_stats}
                    </td>
                    </tr>
                ))}
                */}
                </tbody>
            </table>
    
            </div>
            <br />

        <div className="container text-center">
            <Link to={"/placementofficelogin/placementoffice"}><button className="btn btn-info" >Go to Placement Office Page</button></Link>
        </div>

            <br />
            </Fragment>
            
        );      
    
}

export default ShowCompany
