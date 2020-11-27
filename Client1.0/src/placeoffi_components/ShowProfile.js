import React, {Fragment, useEffect, useState} from "react"
import Avatar from '@material-ui/core/Avatar';


const ShowProfile = () => {

    const [profiles, setProfiles] = useState([])
    const [profilePhoto, setProfilePhoto] = useState("");


    var placement_id = localStorage.getItem("placement_id");
    //var photoURL = localStorage.getItem("profile_photo");
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

    const getProfilePhoto = async() => {
        try {
            
            const res = await fetch(`http://localhost:5000/placementoffice/temp/profile/photo/${placement_id}`)
            const jsonData = await res.json();

             //console.log(jsonData.data)

             setProfilePhoto(jsonData.profile_photo)

            

        } catch (err) {
            console.error(err.message)
        }
    }

    /*useEffect(() => {
    })*/

    useEffect(() => {
        getProfile();
        getProfilePhoto();
    },[])



    

    return(
        <Fragment>
            <h2 className="text-center"><strong>USER Profile : </strong></h2>
            <Avatar alt = "USER"  src = {profilePhoto} style={{
                margin: "50px",
                width: "100px",
                height: "100px",
              }} />
        <div className="container">
        <table class="table table-dark table-striped text-center">
            <thead>
            <tr>
                <th>Field</th>
                <th>information</th>
                
            </tr>
            </thead>
            <br />
            <tbody>
                {console.log('name',profiles[0])}
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
        </Fragment>
        
        
    );
}

export default ShowProfile;