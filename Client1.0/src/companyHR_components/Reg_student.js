import React, {Fragment, useEffect,useState} from "react";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOneCom.css"
import ShowPDF from "../placeoffi_components/ShowPDF";

function Reg_student() {

    const [reg_stu,setReg_stu]=useState([])
    var company_id = localStorage.getItem("companyID")

    const getReg_stu = async() => {
        try {
            const response = await fetch(`http://localhost:5000/company/login/reg_stu/${company_id}`)
            const jsonData=await response.json()

            console.log(jsonData)

            setReg_stu(jsonData);

            console.log(reg_stu)
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(()=>{
        getReg_stu()
    }, []);
    return (
        <Fragment>
          <div id="show">

          <br />
                <h2 className="text-center"><strong> Registered Students : </strong></h2>
                <br/>


              <div className="container">
                  <table class="table table-bordered table-white">
                    <thead class="thead-dark">
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Resumes</th>
                        </tr>
                  </thead>
                  <br/>
                  <tbody>
                  {reg_stu.map(reg_stu=>(
                    <tr key={reg_stu.stu_id}>
                        <td>{reg_stu.name}</td>
                        <td>{reg_stu.stu_id}</td>
                        <td>
                            {<ShowPDF key = {reg_stu.stu_id} id = {reg_stu.stu_id}/>}
                        </td>
                    </tr>
                ))}
                  </tbody>
                </table>
                </div>

                <br/>

                <div className="container text-center">
            <Link to={"/companylogin/company"}><button className="goback"><span>Go to Company Page</span></button></Link>
        </div>                    

                  <br/>
          </div>
       </Fragment>
      
    )
}

export default Reg_student
