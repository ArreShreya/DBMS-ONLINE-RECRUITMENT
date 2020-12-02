import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOne.css"
import ShowPDF from "../placeoffi_components/ShowPDF";
import { Button,IconButton ,Avatar} from '@material-ui/core';

const ListProfile = () => {

    const [profiles, setProfiles] = useState([])

    var student_id = localStorage.getItem("studentID");

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
            <div id="list">

            <br/>

            <div className="container text-center">
        <h1 class="comp-title" ><strong>Student Profile: </strong></h1>
        </div>
        

           {profiles.map(profile => (
               <Avatar alt = "USER" src = {profile.profile_photo} style={{
                   margin: "50px",
                   width: "100px",
                   height: "100px",
                   display : "flex",
                   flexDirection : 'column-reverse' ,
                   flex :"1" ,
                   float: "right",
                   marginBottom : "40px",
                   marginRight: "70px",
                   alignItems :"center"
               }} />
           ))}



        <div className="container">
        <table class="table table-bordered table-white">
            <thead class="thead-dark">
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
                        <strong>id</strong>
                    </td>
                    <td>
                        {profile.stu_id}
                    </td>
                </tr> 
                
            ))}

            {profiles.map(profile => (
                <tr>
                <td>
                    <strong>name</strong>
                </td>
                <td>
                    {profile.name}
                </td>
            </tr>
            ))}


{profiles.map(profile => (
                <tr>
                <td>
                    <strong>CPI</strong>
                </td>
                <td>
                    {profile.cpi}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    <strong>Gender</strong>
                </td>
                <td>
                    {profile.gender}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    <strong>Address</strong>
                </td>
                <td>
                    {profile.address}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    <strong>Email</strong>
                </td>
                <td>
                    {profile.email}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    <strong>Placed Status</strong>
                </td>
                <td>
                    {profile.placed_stats}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    <strong>Uploaded Resume</strong>
                </td>
                <td>
                {<ShowPDF key = {profile.stu_id} id = {profile.stu_id}/>}                
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
            </div>
        </Fragment>
        
        
    );
}

export default ListProfile;