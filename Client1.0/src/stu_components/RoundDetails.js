import React, {useState, useEffect, Fragment} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import "./ExtraOne.css"

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
            <div id="list">
        <br />
        <div className="container text-center">
        <h1 class="comp-title" ><strong>Round Details: </strong></h1>
        </div>
        <br />

        <div className="container">
        <table class="table table-bordered table-white">
            <thead class="thead-dark">
            <tr>
                <th>Company id</th>
                <th>Round 1</th>
                <th>Round 2</th>
                <th>Round 3</th> 
            </tr>
            </thead>
            <br />
            <tbody>

                {rounddetails.map(roundd => (
                <tr key={roundd.company_id}>
                    <td>
                        {roundd.company_id}
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
            </div>
        </Fragment>
    );
}

export default RoundDetails;