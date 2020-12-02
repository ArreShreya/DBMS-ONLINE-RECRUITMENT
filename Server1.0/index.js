const express = require("express")
const app = express()

const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');

const cors = require('cors')
const pool = require('./db')

var multer  = require('multer');
const { profile } = require("console");
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
      },       
      filename: function (req, file, cb) {
        cb(null, file.originalname)
      }
             
    })

app.use(express.urlencoded({ extended: true }));

//middleware
app.use(cors())

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
app.use(express.json())

app.use('/uploads', express.static('uploads'));

const upload = multer({
    storage: storage,
 }).single('file');

//ROUTEs

// NEW STUDENT LOGIN
app.post("/student/loginpage",async(req,res)=>{
    try {
        const data = req.body;
        const login =await pool.query("SELECT stu_id,password FROM student WHERE stu_id=$1 and password=$2",[data.sid,data.password]) ;
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


// Placement office login
app.post("/placementoffice/login",async(req,res)=>{
    try {
        const data = req.body;
        const login =await pool.query("SELECT placement_id, password FROM placement_officer WHERE placement_id=$1 and password=$2",[data.sid,data.password]) ;
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
        

        const {sid, password, name, designation,imageurl} = req.body;
        const newProfile = await pool.query("INSERT INTO placement_officer(placement_id, password, name, designation,profile_photo) VALUES($1, $2, $3, $4,$5 )", [sid, password, name, designation,imageurl])
        res.json(newProfile.rows[0]);
       // res.json(result.rows[0]);
        //console.log(req.params)
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

app.get("/placementoffice/profile/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const wholeProfile = await pool.query("SELECT * FROM placement_officer WHERE placement_id=$1", [id]);
        console.log(wholeProfile.rows)
        res.json(wholeProfile.rows)
        
    } catch(err){
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


// app.get("/placementoffice/temp/profile/photo/:id", async(req, res) => {
//     try{
//         const { id } = req.params;
//        // console.log(id);
//         const wholeProfile = await pool.query("SELECT * FROM placement_officer WHERE placement_id=$1",[id]);
//         //console.log(wholeProfile.rows)
//         res.json(wholeProfile.rows[0])
//     } catch(err){
//         console.error(err.message)
//     }
// })  


// 
app.get('/getPDFS/:id',(req,res)=>{
    const {id} = req.params;
    var options = { 
        root: __dirname 
    }; 
    var filename = `${id}.pdf`
    req.header('Content-Transfer-Encoding', 'Binary')
    req.header("Content-Type", "application/pdf");
    res.setHeader("Content-disposition",
                  "attachment; filename=" + filename + "Example.pdf" );
    res.sendFile(`uploads/${id}`, options
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

        const {sid, password, name, cpi, gender, address, email, placedstats, phonenumber, imageurl} = req.body;
        const newProfile = await pool.query("INSERT INTO student(stu_id, password, name, cpi, gender, address, email, placed_stats, resume_path, profile_photo) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)", [sid, password, name, cpi, gender, address, email, placedstats, sid, imageurl])
        const newProfile1 = await pool.query("INSERT INTO phone_num(stu_id, phone_number) VALUES($1, $2)", [sid, phonenumber])

        //console.log(newProfile.rows[0])
 
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

// // show all comapny details to student 
app.get("/student/temp/companyregister", async(req, res) => {
    try {
        //const alreadyRegistered = await pool.query("SELECT * FROM company_registration WHERE stu_id=$1", [data.sid])
        const companyDetails = await pool.query("SELECT * FROM company")
        res.json(companyDetails.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//Register for a company
app.post("/student/temp/companyregister/apply", async(req, res) => {

    try {
        
        const {student_id, compid } = req.body;
      
            const newRegistration = await pool.query("INSERT INTO company_registration(stu_id, company_id) VALUES($1, $2)", [student_id, compid]);

            res.json(newRegistration.rows)


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


app.post("/uploadfile/:id",
    upload,(req, res, next) => {
        const {id} = req.params;
        console.log(id);
        console.log("Step3");

       console.log("Request file ---", req.file);//Here you get file.
       
        fs.rename(`./uploads/${req.file.originalname}`,`./uploads/${id}`,(req,err)=>{
            console.log("Renamed");

        });
       
        //return res.send(200).end();

        res.status(200).json({msg: "succuss"})
    })


// update an element from profile
// app.put("/student/temp/updateprofile/:id", async(req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, CPI, gender, Address, Email, password, placed_stats, resume_path} = req.body;

//         const updateProfile = await pool.query("UPDATE student SET (name, CPI, gender, Address, Email, password, placed_stats, resume_path) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE stu_id = $9", [name, CPI, gender, Address, Email, password, placed_stats, resume_path, id])

//         res.json("Profile was updated")
//     } catch (err) {
//         console.error(err.message)
//     }
// })



// create profile for company
app.post("/company/temp/createprofile", async(req, res) => {
    try { 
        console.log("req.body", req.body);
        const data = req.body;
        const newProfile_company = await pool.query("INSERT INTO company(company_id,company_name,password,cpi_criteria,contact_details,job_description,package) VALUES($1,$2,$3,$4,$5,$6,$7) ",[data.cid,data.cname,data.password,data.cpi,data.contact,data.job,data.pkg])
        res.json(newProfile_company.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
})

//company login
app.post("/company/login",async(req,res)=>{
    try {
        const data = req.body;
        const login =await pool.query("SELECT * FROM company WHERE company_id=$1 and password=$2",[data.sid,data.password]) ;
       // console.log("login data res", login.rows);
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

// show company 
app.get("/company/login/:id",async(req,res)=>{
    try {
        const data = req.params;
        const getprofile = await pool.query("SELECT * FROM COMPANY WHERE company_id=$1",[data.id]);
        console.log("getprofile",getprofile.rows);
        res.json(getprofile.rows)
    } catch (error) {
        console.log(error.message)
    }
})

// show registered student for specific company
app.get("/company/login/reg_stu/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const allInfo = await pool.query("SELECT stu_id,name FROM student NATURAL JOIN company_registration where company_id= $1",[id])
        console.log(allInfo.rows)
        res.json(allInfo.rows)
    } catch (err) {
        console.error(err.message)
    }
});


// 

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})