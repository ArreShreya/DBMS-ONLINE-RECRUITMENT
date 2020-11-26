import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

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
                <br />
                <h2 className="text-center"><strong> List of Students Registered : </strong></h2>
                <br/>
    
            <div className="container-fluid p-3 my-3 bg-dark text-white">
            <table class="table table-dark table-striped text-center">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>CPI</th>
                    <th>EMAIL</th>
                    <th>Placed_Status</th>                    
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

export default ShowAllStudents
