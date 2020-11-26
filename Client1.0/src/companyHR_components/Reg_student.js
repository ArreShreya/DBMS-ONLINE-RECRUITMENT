import React, {Fragment, useEffect,useState} from "react";

function Reg_student() {
    const [reg_stu,setReg_stu]=useState([])
    var company_id = localStorage.getItem("companyID");
    const getReg_stu=async()=>{
        try {
            const response = await fetch(`http://localhost:5000/company/login/reg_stu/${company_id}`)
            const jsonData=await response.json()

            setReg_stu(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getReg_stu()
    }, []);
    return (
        <Fragment>
           <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '20vh'}}>
             <h1>Registered Student</h1>
           </div>
           <div className="container">
              <table class="table table-dark table-striped text-center">
                <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                    </tr>
               </thead>
               <br/>
               <tbody>
               {reg_stu.map(reg_stu=>(
                <tr key={reg_stu.stu_id}>
                    <td>{reg_stu.name}</td>
                    <td>{reg_stu.stu_id}</td>
                </tr>
             ))}
               </tbody>
             </table>
            </div>
       </Fragment>
      
    )
}

export default Reg_student
