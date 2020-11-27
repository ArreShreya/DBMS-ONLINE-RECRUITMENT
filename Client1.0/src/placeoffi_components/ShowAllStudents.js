import React, {Fragment, useEffect, useState} from "react"
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
                <h2 className="text-center"><strong> List of Students Registered : </strong></h2>
    
            <div className="container">
            <table class="table table-dark table-striped text-center">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>CPI</th>
                    <th>EMAIL</th>
                    <th>Placed_Status</th>  
                    <th>Resume</th>  
      
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
                     <td>
                        {<ShowPDF key = {student.stu_id} id = {student.stu_id}/>}
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

export default ShowAllStudents
