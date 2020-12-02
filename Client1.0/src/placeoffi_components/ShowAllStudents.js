import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOnePla.css"
import ShowPDF from "./ShowPDF";

function ShowAllStudents() {
    
        const [students, setStudents] = useState([])

    
        const getStudents = async() => {
            try {
                
                const res = await fetch("http://localhost:5000/placementoffice/temp/listStudents")
                const jsonData = await res.json();
    
                console.log(jsonData)
    
                setStudents(jsonData)
    
            } catch (err) {
                console.error(err.message)
            }
        }
    
        useEffect(() => {
            getStudents();
        },[])
    
        return(
            <Fragment>
                <div id="show">
                <br />
                <h2 className="text-center"><strong> List of Students Registered : </strong></h2>
                <br/>
    
            <div className="container">
            <table class="table table-bordered table-white">
                <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>CPI</th>
                    <th>EMAIL</th>
                    <th>Placed_Status</th>  
                    <th>Resumes</th>                  
                </tr>
                </thead>
                <br />
                <tbody>
    
                {students.map(student => (
                    <tr>
                    <td>
                        {student.stu_id}
                    </td>
                    <td>
                        {student.name}
                    </td>
                    

                    <td>
                        {student.cpi}
                    </td>
                    <td>
                        {student.email}
                    </td>
                    <td>
                        {student.placed_stats}
                    </td>
                    <td>
                        {<ShowPDF key = {student.stu_id} id = {student.stu_id}/>}
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

export default ShowAllStudents
