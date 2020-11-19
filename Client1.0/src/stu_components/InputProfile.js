import React, {Fragment, useState} from "react"

const InputProfile = () => {

    const [sid, setSid] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpi, setCpi] = useState("0")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    //const [phonenumber, setPhonenumber] = useState("")
    const [placedstatus, setPlacedstatus] = useState("")
    const [resumepath, setResumepath] = useState("")

    const onSubmitProfile = async e => {
        e.preventDefault();
        try {
            const body = {sid, password, name, cpi, gender, address, email, placedstatus, resumepath}
            const res = await fetch("http://localhost:5000/student/temp/createprofile/:sid", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }) 

            console.log(res)
            //window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5" >Create Profile</h1>
            
        <div>
            <form action="/action_page.php"  class="needs-validation" novalidate onSubmit={onSubmitProfile}>
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
                <div class="form-group">
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
                <div class="form-group">
                    <label for="uplst">Placed Status:</label>
                    <input type="text" class="form-control" id="uplst" placeholder="Enter placed status" name="uplst" required value = {placedstatus} onChange={e => setPlacedstatus(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>
                <div class="form-group">
                    <label for="urept">Resume path:</label>
                    <input type="text" class="form-control" id="urept" placeholder="Enter email ID" name="urept" required value = {resumepath} onChange={e => setResumepath(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div>


                {/* <div class="form-group">
                    <label for="upno">Phone number:</label>
                    <input type="text" class="form-control" id="upno" placeholder="Enter phone number" name="upno" required value = {phonenumber} onChange={e => setPhonenumber(e.target.value)}/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
                </div> */}
                
                
                <button className="btn btn-success">Submit</button>
            </form>
            </div>



{/* (function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})(); */}



               
            
        </Fragment>
    )
}

export default InputProfile;