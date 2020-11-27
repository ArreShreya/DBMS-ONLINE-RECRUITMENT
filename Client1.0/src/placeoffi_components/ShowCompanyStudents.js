import React, {Fragment, useEffect, useState} from "react"

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
            <h2 className="text-center"><strong> List of Students Registered in Companies : </strong></h2>

        <div className="container">
        <table class="table table-dark table-striped text-center">
            <thead>
            <tr>
                <th> STUDENT ID</th>
                <th>STUDENT Name</th>
                <th>COMPANY NAME</th>
                <th> PLACED_STATUS</th>
                <th> APPLY </th>
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

            {results.map(result => (
                <tr>
                <td>
                    {result.stu_id}
                </td>
                <td>
                    {result.name}
                </td>
                <td>
                    {result.company_name}
                </td>
                <td>
                    {result.placed_stats}
                </td>
                <td>
                    {result.apply}
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
        </Fragment>
    );
}

export default ShowCompanyStudents
