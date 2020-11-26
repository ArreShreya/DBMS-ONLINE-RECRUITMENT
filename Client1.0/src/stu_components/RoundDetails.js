import React, {useState, useEffect, Fragment} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"

const RoundDetails = () => {
 
    const [rounddetails, setRounddetails] = useState([]);

    const getRound = async() => {
        try {
            
            const res = await fetch("http://localhost:5000/companyrounds")
            const jsonData = await res.json();

                console.log("this is json data")
            console.log(jsonData)

            setRounddetails(jsonData)

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getRound();
    }, [])

    return(
        <Fragment>
        <br />
            <h2 className="text-center"><strong>Round Details : </strong></h2>
        <br />

        <div className="container-fluid p-3 my-3 bg-dark text-white">
        <table class="table table-dark table-striped text-center">
            <thead>
            <tr>
                <th>Company id</th>
                <th>Company name</th>
                <th>Round 1</th>
                <th>Round 2</th>
                <th>Round 3</th> 
            </tr>
            </thead>
            <br />
            <tbody>

            {/* {rounddetails.map(bleh => (
                <tr key={rounddetails.company_id}>
                    <td>
                        {rounddetails.company_id}
                    </td>
                </tr> 
                
            ))} */}

                {rounddetails.map(roundd => (
                <tr key={roundd.company_id}>
                    <td>
                        {roundd.company_id}
                    </td>
                    <td>
                        {roundd.company_name}
                    </td>
                    <td>
                        {roundd.round_1}
                    </td>
                    <td>
                        {roundd.round_2}
                    </td>
                    <td>
                        {roundd.round_3}
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
        </Fragment>
    );
}

export default RoundDetails;