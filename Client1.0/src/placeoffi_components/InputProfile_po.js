import React,{Fragment,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"
import "./ExtraOnePla.css"
import { Button } from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

function InputProfile_po() {
    const [sid, setSid] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [designation, setDesignation] = useState("")
    const [imageurl , setImageurl] = useState("");

    const setProfilePhoto = (e) =>{
        if(e.target.files[0]){
            var reader = new FileReader();
            reader.addEventListener('load',()=>{
               // localStorage.setItem('profile_photo',reader.result);
                setImageurl(reader.result)
            });
            reader.readAsDataURL(e.target.files[0]);
        

        }
        else{
        setImageurl('/static/images/avatar/1.jpg')

        }
    }

  
    const onSubmitProfile = async (e)=>{

        try{
            e.preventDefault();
            const body = {sid,password,name,designation,imageurl};
            const reqProfile = await fetch(`http://localhost:5000/temp/placementoffice/createprofile/${sid}`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your profile has been created!',
                showConfirmButton: false,
                timer: 1500
            })

            //console.log(reqProfile)
        } 
        catch (err) {
            console.error(err.message)
        }
        

    }

    return (
        <Fragment>
            <div id="show">
                <br />
            <div className="container text-center">
        <h1 class="comp-title" ><strong>Create Profile: </strong></h1>
        </div>
        <br/>
            
        <div className="container">
        <div className = "Profile_Photo" style = {{display : "flex",flexDirection : 'column-reverse' ,flex :"1" ,float: "right",marginBottom : "40px",alignItems :"center"}}>
            <div className = "photo_title" > 

            <Button variant="contained" classname = "fileInput" component="label" color="primary" startIcon = {<AddAPhotoIcon/>} > Add Profile Photo                    <input
                    accept="image/*"
                    type="file"
                    style={{ display: "none" }}
                    onChange = {setProfilePhoto}/>

                    </Button>
                </div>
           <label for = "Avatar">
            <Avatar 
                alt = "USER"
                src={imageurl} 
                style={{
                    width: "80px",
                    height: "80px",
                }} 
                />
            </label>
            </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            <form action="/action_page.php"  class="needs-validation" enctype="multipart/form-data"  onSubmit={onSubmitProfile}>
                <div class="form-group">
                    <label for="uid">User ID:</label>
                    <input type="text" class="form-control" id="uid" placeholder="Enter username" name="uid" required value = {sid} onChange={e => setSid(e.target.value)} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" required value = {password} onChange={e => setPassword(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group">
                    <label for="uname">Full Name:</label>
                    <input type="text" class="form-control" id="uname" placeholder="Enter name" name="uname" required value = {name} onChange={e => setName(e.target.value)} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
               
                <div class="form-group">
                    <label for="Design">Designation</label>
                    <input type="text" class="form-control" id="Design" placeholder="Enter email ID" name="design" required value = {designation} onChange={e => setDesignation(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
        
               <br />
               <br />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>

        <br />

            <div className="container text-center">
            <Link to={"/placementofficelogin"}><button className="goback"><span>Go to Login Page</span></button></Link>
            </div>

                <br />
                </div>
        </Fragment>

    )
}

export default InputProfile_po;
