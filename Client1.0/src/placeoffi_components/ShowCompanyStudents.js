import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOnePla.css"

function ShowCompanyStudents() {
    const [results, setResults] = useState([])

    
    const getResults = async() => {
        try {
            
            const res = await fetch("http://localhost:5000/placementoffice/temp/listStudents-with-Companies")
            const jsonData = await res.json();

            console.log(jsonData)

            setResults(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getResults();
    },[])

    return(
        <Fragment>
            <div id="show">
            <br/>
            <h2 className="text-center"><strong> List of Students Registered in Companies : </strong></h2>
            <br />
        <div className="container">
        <table class="table table-bordered table-white">
            <thead class="thead-dark">
            <tr>
                <th> Student ID</th>
                <th>Student Name</th>
                <th>Company Name</th>
            </tr>
            </thead>
            <br />
            <tbody>

            {results.map(result => (
                <tr>
                <td>
                    {result.stu_id}
                </td>
                <td>
                    {result.name}
                </td>
                <td>
                    {result.placed_stats}
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

export default ShowCompanyStudents
