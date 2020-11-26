import React, {Fragment, useEffect, useState} from "react"
import Avatar from '@material-ui/core/Avatar';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

const ShowProfile = () => {

    const [profiles, setProfiles] = useState([])

    var placement_id = sessionStorage.getItem("PlacementID");
    var photoURL = localStorage.getItem("profile_photo");
    //console.log(photoURL);

    const getProfile = async() => {
        try {
            
            const res = await fetch(`http://localhost:5000/placementoffice/temp/profile/${placement_id}`)
            const jsonData = await res.json();

            console.log(jsonData)

            setProfiles(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getProfile();
    },[])

    return(
        <Fragment>
            <br />
            <h2 className="text-center"><strong>Placement Officer Profile : </strong></h2>
        <Avatar alt = "NAME" src = {photoURL}  style={{
                margin: "10px",
                width: "60px",
                height: "60px",
              }} />
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
                        {profile.placement_id}
                    </td>
                </tr> 
                
            ))}

            {profiles.map(profile => (
                <tr>
                <td>
                    name
                </td>
                <td>
                    { profile.name}
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
                    Designation
                </td>
                <td>
                    {profile.designation}
                </td>
            </tr>
            ))}

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

export default ShowProfile;