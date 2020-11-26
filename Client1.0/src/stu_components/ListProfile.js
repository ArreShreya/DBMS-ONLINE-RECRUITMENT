import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import StudentLogin from "../StudentLogin"

const ListProfile = () => {

    const [profiles, setProfiles] = useState([])

    var student_id = sessionStorage.getItem("studentID");

    const getProfile = async() => {
        try {
            
            const res = await fetch(`http://localhost:5000/student/temp/profile/${student_id}`)
            const jsonData = await res.json();

            console.log(jsonData)

            setProfiles(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getProfile();
    }, [])

    return(
        <Fragment>
            <br />
            <h2 className="text-center"><strong>Student Profile : </strong></h2>
            <br />

        <div className="container-fluid p-3 my-3 bg-dark text-white">
        <table class="table table-dark table-striped text-center">
            <thead>
            <tr>
                <th>Field</th>
                <th>information</th>
                
            </tr>
            </thead>
            <br />
            <tbody>
            {profiles.map(profile => (
                <tr key={profile.stu_id}>
                    <td>
                        id
                    </td>
                    <td>
                        {profile.stu_id}
                    </td>
                </tr> 
                
            ))}

            {profiles.map(profile => (
                <tr>
                <td>
                    name
                </td>
                <td>
                    {profile.name}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    password
                </td>
                <td>
                    {profile.password}
                </td>
            </tr>
            ))}


{profiles.map(profile => (
                <tr>
                <td>
                    CPI
                </td>
                <td>
                    {profile.cpi}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    Gender
                </td>
                <td>
                    {profile.gender}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    Address
                </td>
                <td>
                    {profile.address}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    Email
                </td>
                <td>
                    {profile.email}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    Placed Status
                </td>
                <td>
                    {profile.placed_stats}
                </td>
            </tr>
            ))}

            </tbody>
        </table>

        </div>
        <br />

        <div className="container text-center">
            <Link to={"/studentlogin/students"}><button className="goback"><span>Go to Studnets Page</span></button></Link>
        </div>

            <br />

        </Fragment>
        
        
    );
}

export default ListProfile;