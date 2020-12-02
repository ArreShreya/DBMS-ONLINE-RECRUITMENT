import React, {Fragment, useEffect, useState} from "react"
import Avatar from '@material-ui/core/Avatar';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOnePla.css"


const ShowProfile = () => {

    const [profiles, setProfiles] = useState([])
    const [profilePhoto, setProfilePhoto] = useState("");


    var placement_id = localStorage.getItem("PlacementID");
    //var photoURL = localStorage.getItem("profile_photo");
    //console.log(photoURL);

    const getProfile = async() => {
        try {
            
            const res = await fetch(`http://localhost:5000/placementoffice/profile/${placement_id}`)
            const jsonData = await res.json();

            console.log(jsonData)

            setProfiles(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    // const getProfilePhoto = async() => {
    //     try {
            
    //         const res = await fetch(`http://localhost:5000/placementoffice/temp/profile/photo/${placement_id}`)
    //         const jsonData = await res.json();

    //          //console.log(jsonData.data)

    //          setProfilePhoto(jsonData.profile_photo)

            

    //     } catch (err) {
    //         console.error(err.message)
    //     }
    // }

    /*useEffect(() => {
    })*/

    useEffect(() => {
        getProfile();
        // getProfilePhoto();
    },[])

    return(
        <Fragment>
        
         <div id="list">
            <br />
            <div className="container text-center">
        <h1 class="comp-title" ><strong>Placement Officer Profile: </strong></h1>
        </div>
           <br />


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
            {/* {console.log('name',profiles[0])} */}
            {profiles.map(profile => (
                <tr key={profile.stu_id}>
                    <td>
                        <strong>id</strong>
                    </td>
                    <td>
                        {profile.placement_id}
                    </td>
                </tr> 
                
            ))}

            {profiles.map(profile => (
                <tr>
                <td>
                    <strong>name</strong>
                </td>
                <td>
                    { profile.name}
                </td>
            </tr>
            ))}

{profiles.map(profile => (
                <tr>
                <td>
                    <strong>password</strong>
                </td>
                <td>
                    {profile.password}
                </td>
            </tr>
            ))}


{profiles.map(profile => (
                <tr>
                <td>
                    <strong>Designation</strong>
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
            <Link to={"/placementofficelogin/placementoffice"}><button className="goback"><span>Go to Placement Office Page</span></button></Link>
        </div>

            <br />


            </div>
        </Fragment>
        
        
    );
}

export default ShowProfile;