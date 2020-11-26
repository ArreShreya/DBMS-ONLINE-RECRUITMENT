import React,{Fragment,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"

function InputProfile_po() {
    const [sid, setSid] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [designation, setDesignation] = useState("")
    const [imageurl , setImageurl] = useState("");
    const [resume,setResume] = useState("");
    const [filename,setFilename] = useState("");

    const setProfilePhoto = (e) =>{
        if(e.target.files[0]){
            var reader = new FileReader();
            reader.addEventListener('load',()=>{
                localStorage.setItem('profile_photo',reader.result);
                        //setImageurl(URL.createObjectURL(e.target.files[0]))
                setImageurl(reader.result)
            });
            reader.readAsDataURL(e.target.files[0]);
        

        }
        else{
        setImageurl('/static/images/avatar/1.jpg')
        }
    }

    const setResumeFile = async(e) =>{
        setFilename(e.target.files[0].name)
        console.log("File",e.target.files[0]);
        const dataForm = new FormData();
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        dataForm.append('file', e.target.files[0]);  
        axios.post("http://localhost:5000/test",dataForm,config)
            .then((response) => {

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'The file is successfully uploaded!',
                    showConfirmButton: false,
                    timer: 1500
                })

            }).catch((error) => {
        });
          
        /*   const re =   await fetch ('http://localhost:5000/test', {
                method:"POST",
                headers : {'content-type': 'multipart/form-data'}   ,
                dataForm
    })
            .then(res => {
                console.log("response",res);
            })
            .catch(err => console.log(err));   */   
    
        
    }
    const onSubmitProfile = async (e)=>{

        try{
            e.preventDefault();
            const body = {sid,password,name,designation};
            const reqProfile = await fetch("http://localhost:5000/temp/placementoffice/createprofile/:sid",{
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

            console.log(reqProfile)
        } 
        catch (err) {
            console.error(err.message)
        }
        

    }

    return (
        <Fragment>
        <h1 className="text-center mt-5" >Create Profile</h1>
            
        <div className="container">
        <input accept="image/*"  id="profile_photo" type="file" onChange = {setProfilePhoto}/>
        <label htmlFor="contained-button-file">
        <IconButton>
        <Avatar 
            alt = "USER"
            src={imageurl} 
            style={{
                margin: "10px",
                width: "60px",
                height: "60px",
              }} 
            />
        </IconButton>
        </label>

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
                <input   id="profile_photo" type="file" name = "resume" onChange = {setResumeFile}/>
               <br />
               <br />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>

        <br />

            <div className="container text-center">
            <Link to={"/placementofficelogin"}><button className="btn btn-info" >Go to Login Page</button></Link>
            </div>

                <br />
        </Fragment>

    )
}

export default InputProfile_po;
