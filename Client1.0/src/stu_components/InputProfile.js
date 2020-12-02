import React, {Fragment, useState} from "react"
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch } from "react-router-dom"
import Swal from "sweetalert2"
import "./ExtraOne.css"
import BackupIcon from '@material-ui/icons/Backup';
import { Button,IconButton ,Avatar} from '@material-ui/core';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import axios from 'axios';

const InputProfile = () => {

    const [sid, setSid] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpi, setCpi] = useState("0")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [placedstatus, setPlacedstatus] = useState("")
    //const [resumepath, setResumepath] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [imageurl , setImageurl] = useState("");
    const [filename,setFilename] = useState("");
    const [resume,setResume] = useState(null);


    const setResumeFile = async(e) =>{
        // console.log("File",e.target.files[0]);
        setFilename(e.target.files[0].name)
        setResume(e.target.files[0]);
        console.log("Step0");
       
    console.log("Step1",e.target.files[0].name);
     }

    const onSubmitProfile = async e => {
        
        e.preventDefault();
        try {
            const body = {sid, password, name, cpi, gender, address, email, placedstatus, phonenumber, imageurl}
            const head = {
              headers:  {"Content-Type": "application/json"}};
            const resSubmit = await axios.post(`http://localhost:5000/student/temp/createprofile/${sid}`, JSON.stringify(body),head)
                //body: JSON.stringify(body.then(res => {

               // return res.json()  
           
           console.log("Heelo",resSubmit.status);
            if(resSubmit.status === 200) {
                console.log("Step2");
             
                //console.log("Data-form",dataForm);
               const dataForm = new FormData();
               const config = {
                 headers: {
                     'content-type': 'multipart/form-data'
                 }
             };
             dataForm.append('file', resume);  
             console.log("Data-form",dataForm);

                const resumeLogin = await axios.post(`http://localhost:5000/uploadfile/${sid}`,dataForm,config)
               /* .then((response) => {
                    console.log(resume);
                    Swal.fire("File is successfully uploaded")
                }).catch((error) => {
            });*/
    
            console.log(resumeLogin);


            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your profile has been created!',
                showConfirmButton: false,
                timer: 1500
            })

        
        } else {
            Swal.fire("Sorry!", "Incorrect credentials", "error")

        }
            //window.location = "/";
     } catch (err) {
            console.error(err.message)
        }
    }


    const setProfilePhoto = (e) =>{
        if(e.target.files[0]){
            var reader = new FileReader();
            reader.addEventListener('load',()=>{
               // localStorage.setItem('profile_photo',reader.result);
                setImageurl(reader.result)
            });
            reader.readAsDataURL(e.target.files[0]);
        

        }
       /* else{
        setImageurl('/static/images/avatar/1.jpg')
        }*/
    }

    return(
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

            <form action="/action_page.php"  class="needs-validation" novalidate onSubmit={onSubmitProfile}>
            <div class="form-group">
                    <label for="uid" style = {{marginTop : "140px" }}>User ID:</label>
                    <input type="text" class="form-control" id="uid" placeholder="Enter username" name="uid" required value = {sid} onChange={e => setSid(e.target.value)} required />
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
                    <label for="ucpi">CPI:</label>
                    <input type="text" class="form-control" id="ucpi" placeholder="Enter CPI" name="ucpi" required value = {cpi} onChange={e => setCpi(e.target.value)} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group">
                    <label for="ugender">Gender:</label>
                    <input type="text" class="form-control" id="ugender" placeholder="Enter username" name="ugender" required value = {gender} onChange={e => setGender(e.target.value)} />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group ">
                    <label for="add">Address:</label>
                    <input type="text" class="form-control" id="add" placeholder="Enter address" name="add" required value = {address} onChange={e => setAddress(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group">
                    <label for="umail">Email:</label>
                    <input type="text" class="form-control" id="umail" placeholder="Enter email ID" name="umail" required value = {email} onChange={e => setEmail(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group ">
                    <label for="uplst">Placed Status:</label>
                    <input type="text" class="form-control" id="uplst" placeholder="Enter placed status" name="uplst" required value = {placedstatus} onChange={e => setPlacedstatus(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
               
                <div class="form-group ">
                    <label for="upno">Phone Number:</label>
                    <input type="text" class="form-control" id="upno" placeholder="Enter email ID" name="upno" required value = {phonenumber} onChange={e => setPhonenumber(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>

                {/* <div class="form-group">
                    <label for="upno">Phone number:</label>
                    <input type="text" class="form-control" id="upno" placeholder="Enter phone number" name="upno" required value = {phonenumber} onChange={e => setPhonenumber(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div> */}
                
                <br/>

                <div className = "upload" style = {{display : "flex"}}>
                    <Button variant="contained" classname = "fileInput" component="label" color="primary" startIcon = {<BackupIcon/>} > Upload File
                    <input
                    type="file"
                    style={{ display: "none" }}
                    onChange = {setResumeFile}/>

                    </Button>
                    <h4> {filename} </h4>

                </div>

                <br/>
                
                <div >
                <button className="btn btn-success">Submit</button>
                </div>

            </form>
            </div>

            

                <br />

            <div className="container text-center">
            <Link to={"/studentlogin"}><button className="goback"><span>Go to Login Page</span></button></Link>
            </div>

                <br />

        </div>   
            
        </Fragment>
    )
}

export default InputProfile;