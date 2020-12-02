import React, {Fragment, useState, useEffect} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"
import "./ExtraOne.css"

const CompanyRegistration = (props) => {

    const [companyvar, setCompanyvar] = useState([]);
    const [alreadycompanyvar, setAlreadycompanyvar] = useState([]);
    const [compid, setCompid] = useState("");
    //const [compname, setCompname] = useState("");
    var res2 = {};
    const [jsonData2, setJsonData2] = useState([]);
    var flag;

    var student_id = localStorage.getItem("studentID");

    const handleChange = (e) => {
        setCompid(e.target.value)
        //setCompname(e.target.name)
    }

    const extraFunction = (abc) => {

        flag = false;
        
        for(var i=0; i<jsonData2.length; i++){
            
            if(jsonData2[i].company_id === abc){
                flag = true;
            }
            
        }

        //console.log("company name : ", abc)
        //console.log("flag : ", flag)

    }

    const onSubmitApply = async(e) => {
        e.preventDefault();
        //console.log("Compid : ", compid)
        //console.log("Compname : ", compname)
        try {
            const body = {student_id, compid }
            const res = await fetch("http://localhost:5000/student/temp/companyregister/apply", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            //

            console.log(res);

            if(res.status === 200){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully registered!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

            window.location.reload();

        } catch (err) {
            console.error(err.message)
        }
    }

    const getCompany =  async() => {
        const res = await fetch("http://localhost:5000/student/temp/companyregister");
        const jsonData = await res.json();

        console.log(jsonData);
        setCompanyvar(jsonData)
    }

    useEffect(() => {
        getCompany();
    }, [])


    const getCompanyTwo =  async() => {
        res2 = await fetch(`http://localhost:5000/alreadyregistered/${student_id}`);
        const jsonData = await res2.json();

        setJsonData2(jsonData);
        setAlreadycompanyvar(jsonData2)
    }

    useEffect(() => {

        let isSubscribed = true;

        getCompanyTwo();

        return () => (isSubscribed = false)

    }, [])

    return(
        <Fragment>
          <div id="list">

                <br />
                <div className="container text-center">
                <h1 class="comp-title" ><strong>Company Registration: </strong></h1>
                </div>
                    <br />

                <div className="container">
                    <table class="table table-bordered table-white">
                        <thead class="thead-dark">
                        <tr>
                            <th>Company ID</th>
                            <th>Company name</th>
                            <th>Package</th>
                            <th>Register</th>
                            <th>Confirm Registration</th>
                            
                        </tr>
                        </thead>
                        
                        <tbody>
                        {companyvar.map(companyvars => (

                            <Fragment>
                            
                            <tr key={companyvars.company_id}>
                                <td>
                                    {companyvars.company_id}
                                </td>
                                <td>
                                    {companyvars.company_name}
                                </td>
                                <td>
                                    {companyvars.package}
                                </td>
                                <td>
                                    {extraFunction(companyvars.company_id)}

                                    {
                                        flag ? (

                                            <button className="btn btn-danger" name={companyvars.company_name} value={companyvars.company_id} disabled> Already Registered </button>
            
                                            ) : (
                                                <button className="btn btn-success" name={companyvars.company_name} value={companyvars.company_id} 
                                        onClick={(e) => handleChange(e) }> Register </button>
                                            )
                                    }
                                    <br />
                                </td>

                                <td>

                                    
                                    {
                                        flag ? (

                                        <p></p>
            
                                            ) : (
                                                <button className="btn btn-warning" onClick={onSubmitApply} > Confirm </button>)
                                    }


                                    
                                </td>

                            </tr> 
                            
                            </Fragment>
                        ))}

                        </tbody>
                    </table>

                </div>
                <br />
                <br />

                <br />

                <div className="container text-right">
                    <Link to={"/studentlogin/students"}><button className="goback" ><span>Go to Studnets Page</span></button></Link>
                </div>

            <br />
        </div>
        </Fragment>

    );
}

export default CompanyRegistration;