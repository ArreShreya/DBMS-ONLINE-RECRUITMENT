import React from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import InputProfile from "./InputProfile";

const StudentPage = ({match, location, history}) => {

    // console.log(match);
    // console.log(location);
    // console.log(history);

    //let match = useRouteMatch();

     <Switch>
         <Route path={`${match.path}/createprofile`}  component={InputProfile} />
     </Switch>


    return(
        <div>
            {/* <ul>
                { ["Shreya", "Shivani"].map((student, idx) => {
                    return <li key={idx}>{student}</li>
                }) }
            </ul> */}

            <div className="crpr mt-10">
            <Link to={`${match.path}/createprofile`}><button className="btn btn-success">Creat Profile</button></Link>
            </div>
            
            <div>
            <Link to={`${match.path}/showprofile`}><button className="btn btn-success">Show Profile</button></Link>
            </div>

            <div>
            <Link to={`${match.path}/updateteprofile`}><button className="btn btn-success">Update Profile</button></Link>
            </div>
            

        </div>


    //     <div>
    //   <h2>Student Profile</h2>

    //   <ul>
    //     <li>
    //       <Link to={`${match.url}/components`}>Components</Link>
    //     </li>
    //     <li>
    //       <Link to={`${match.url}/props-v-state`}>
    //         Props v. State
    //       </Link>
    //     </li>
    //   </ul>

    //   {/* The Topics page has its own <Switch> with more routes
    //       that build on the /topics URL path. You can think of the
    //       2nd <Route> here as an "index" page for all topics, or
    //       the page that is shown when no topic is selected */}
    //   <Switch>
    //     <Route path={`${match.path}/:topicId`}>
    //       <Topic />
    //     </Route>
    //     <Route path={match.path}>
    //       <h3>Please select a topic.</h3>
    //     </Route>
    //   </Switch>
    // </div>

    );
}

export default StudentPage;