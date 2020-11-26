const express = require("express")
//const upload = require('express-fileupload')
const app = express()

const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');

const cors = require('cors')
const pool = require('./db')

var multer  = require('multer')
var storage = multer.diskStorage({    destination: "./uploads"
})

//middleware
app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

const upload = multer({
    storage: storage,
 }).single('file');

//ROUTEs

//LOGIN
app.post("/login",async(req,res)=>{
    try {
        const data = req.body;
        const login =await pool.query("SELECT * FROM student WHERE stu_id=$1 and password=$2",[data.sid,data.password]) ;
        console.log("login data res", login.rows);
        if(!login.rows[0] && !login.rows.length) {
            // res.json(400, {
            //     error: 1,
            //     msg: "some error"
            //  });
            res.status(400).json({
                error: 1,
                msg: "some error"
             });
        } else {
            res.json(login.rows[0]);
        }
    } catch (err) {
        console.error(err.message);
    }
})


// Placement office login
app.post("/placementoffice/login",async(req,res)=>{
    try {
        const data = req.body;
        const login =await pool.query("SELECT * FROM placement_officer WHERE placement_id=$1 and password=$2",[data.sid,data.password]) ;
        console.log("login data res", login.rows);
        if(!login.rows[0] && !login.rows.length) {
            res.json(400, {
                error: 1,
                msg: "some error"
             });
        } else {
            res.json(login.rows[0]);
        }
    } catch (err) {
        console.error(err.message);
    }
})


app.post("/temp/placementoffice/createprofile/:id", async(req, res) => {
    try { 

        const {id} = req.params;
        

        const {sid, password, name, designation} = req.body;
        const newProfile = await pool.query("INSERT INTO placement_officer(placement_id, password, name, designation) VALUES($1, $2, $3, $4 )", [sid, password, name, designation])
        //const result = await pool.query("INSERT INTO file (data,file_name) VALUES($1,$2)",[res);
       // res.json(newProfile.rows[0]);
       // res.json(result.rows[0]);
        //console.log(req.params)

        res.json(newProfile.rows);

    } catch (err) {
        console.error(err.message)
    }
})


app.post('/test',
    upload,(req, res, next) => {
       console.log("Request file ---", req.file);//Here you get file.
       /*Now do where ever you want to do*/
       
        return res.send(200).end();
})

app.get("/placementoffice/temp/profile/:id", async(req, res) => {
    try{
        const { id } = req.params;
       // console.log(id);
        const wholeProfile = await pool.query("SELECT * FROM placement_officer WHERE placement_id=$1", [id]);
        res.json(wholeProfile.rows)
    } catch(err){
        console.error(err.message)
    }
}) 


app.get('/getPDFS',(req,res)=>{
    console.log("PFS")
    var options = { 
        root: __dirname 
    }; 
    var filename = 'out.pdf'
    req.header('Content-Transfer-Encoding', 'Binary')
    req.header("Content-Type", "application/pdf");
res.setHeader("Content-disposition",
                  "attachment; filename=" +
                  "Example.pdf" );
    res.sendFile('uploads/63e6eda2aabf5daf61e56451dcbec883', options
   );
   // res.download('./uploads/4e9e2967cf760aeb0722aa76549f40cf','output.pdf');
    console.log("1");
})


app.get("/placementoffice/temp/listStudents", async(req, res) => {
    try{
        const { id } = req.params;
        //console.log(id);
        const wholeProfile = await pool.query("SELECT * FROM student");
        res.json(wholeProfile.rows)
    } catch(err){
        console.error(err.message)
    }
}) 


app.get("/placementoffice/temp/listStudents-with-Companies", async(req, res) => {
    try{
        const { id } = req.params;
        //console.log(id);
        const wholeProfile = await pool.query("SELECT * FROM company_registration natural join student ");
        res.json(wholeProfile.rows)
    } catch(err){
        console.error(err.message)
    }
}) 


app.get("/placementoffice/temp/listCompanies", async(req, res) => {
    try{
        const { id } = req.params;
        //console.log(id);
        const wholeProfile = await pool.query("SELECT * FROM company");
        res.json(wholeProfile.rows)
    } catch(err){
        console.error(err.message)
    }
}) 



// create a profile
app.post("/student/temp/createprofile/:id", async(req, res) => {
    try { 

        const {id} = req.params;

        const {sid, password, name, cpi, gender, address, email, placedstats, resumepath, phonenumber} = req.body;
        const newProfile = await pool.query("INSERT INTO student(stu_id, password, name, cpi, gender, address, email, placed_stats, resume_path) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)", [sid, password, name, cpi, gender, address, email, placedstats, resumepath])
        const newProfile1 = await pool.query("INSERT INTO phone_num(stu_id, phone_number) VALUES($1, $2)", [sid, phonenumber])
 
        res.json(newProfile.rows[0] + newProfile1.rows[0]);
        //console.log(req.params)
    } catch (err) {
        console.error(err.message)
    }
})

app.post("/discussion/:stid", async(req, res) => {
    
    //const {id} = req.params;
    try {
        const {stid, name, diss} = req.body;
        const newDiss = await pool.query("INSERT INTO discussion_forum(id, name, discussion) VALUES($1, $2, $3)", [stid, name, diss]);

    res.json(newDiss.rows);
    } catch (err) {
        console.error(err.message)
    }   
})

// post feedback
app.post("/feedbacks/:name", async(req, res) => {
    const {name, feedback} = req.body;
    const newFeed = await pool.query("INSERT INTO feedback(name, suggestions) VALUES($1, $2)", [name, feedback]);

    res.json(newFeed.rows)
})

//Register for a company
app.post("/registerincompany", async(req, res) => {

    try {
        
        const {student_id, compid, compname} = req.body;
        // const ifExist = await pool.query("SELECT * FROM company_registration WHERE stu_id=$1 and company_id=$2 and company_name=$3", [student_id, compid, compname])

        // if(!ifExist.rows[0] && !ifExist.rows.length){
        // res.status(200).json({
        //     error: 1,
        //     msg: "some error"
        //  });
        // }

      
            const newRegistration = await pool.query("INSERT INTO company_registration(stu_id, company_id, company_name, apply) VALUES($1, $2, $3, true)", [student_id, compid, compname]);

            res.json(newRegistration.rows)
       

        


    } catch (err) {
        console.error(err.message)
    }

    
})

app.get("/student/temp/profile/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const wholeProfile = await pool.query("SELECT * FROM student WHERE stu_id=$1", [id]);
        res.json(wholeProfile.rows)
        
    } catch(err){
        console.error(err.message)
    }
}) 


// Get round details

app.get("/companyrounds", async(req, res) => {
    try {
        const roundDetails = await pool.query("SELECT * FROM round_details")
        res.json(roundDetails.rows)
    } catch (err) {
        console.error(err.message)
    }
})

// Get the discussions

app.get("/discussions", async(req, res) => {
    try {
        const discussionDetails = await pool.query("SELECT * FROM discussion_forum ")
        res.json(discussionDetails.rows)
        
    } catch (err) {
        console.error(err.message)
    }
})

// Get company names for registration 
app.get("/companyforregistration", async(req, res) => {
    try {
        //const alreadyRegistered = await pool.query("SELECT * FROM company_registration WHERE stu_id=$1", [data.sid])
        const companyDetails = await pool.query("SELECT * FROM company")
        res.json(companyDetails.rows)
    } catch (err) {
        console.error(err.message)
    }
})


app.get("/alreadyregistered/:id", async(req, res) => {

    const {id} = req.params;

    try {
        //const alreadyRegistered = await pool.query("SELECT * FROM company_registration WHERE stu_id=$1", [data.sid])
        const alrcompanyDetails = await pool.query("SELECT * FROM company_registration WHERE stu_id=$1", [id])
        res.json(alrcompanyDetails.rows)
    } catch (err) {
        console.error(err.message)
    }
})


// update an element from profile
app.put("/student/temp/updateprofile/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { name, CPI, gender, Address, Email, password, placed_stats, resume_path} = req.body;

        const updateProfile = await pool.query("UPDATE student SET (name, CPI, gender, Address, Email, password, placed_stats, resume_path) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE stu_id = $9", [name, CPI, gender, Address, Email, password, placed_stats, resume_path, id])

        res.json("Profile was updated")
    } catch (err) {
        console.error(err.message)
    }
})



// 

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})