import React , {Fragment, useEffect, useState} from 'react'

const GetProfile = () => {
    
    const [profiles, setProfiles] = useState([])

    var company_id = localStorage.getItem("companyID");

    const getProfile = async() => {
        try {
            
            const res = await fetch(`http://localhost:5000/company/login/${company_id}`)
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
    // company/login/:id
    return (
        <Fragment>
             <h2 className="text-center"><strong>Company Profile : </strong></h2>
            <div className="container">
                <table class="table table-dark table-striped text-center">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>information</th>
                        </tr>
                    </thead>
                    <br/>
                    <tbody>
                        {profiles.map(profile=>(
                            <tr key={profile.company_id}>
                                <td>
                                    id
                                </td>
                                <td>
                                    {profile.company_id}
                                </td>
                            </tr>
                        ))}
                        {profiles.map(profile=>(
                            <tr>
                                <td>
                                    name
                                </td>
                                <td>
                                    {profile.company_name}
                                </td>
                            </tr>
                        ))}
                        {profiles.map(profile=>(
                            <tr>
                                <td>
                                    cpi criteria
                                </td>
                                <td>
                                    {profile.cpi_criteria}
                                </td>
                            </tr>
                        ))}
                        {profiles.map(profile=>(
                            <tr>
                                <td>
                                    contact details
                                </td>
                                <td>
                                    {profile.contact_details}
                                </td>
                            </tr>
                        ))}
                        {profiles.map(profile=>(
                            <tr>
                                <td>
                                    job description
                                </td>
                                <td>
                                    {profile.job_description}
                                </td>
                            </tr>
                        ))}
                        {profiles.map(profile=>(
                            <tr>
                                <td>
                                    package
                                </td>
                                <td>
                                    {profile.package}
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default GetProfile
