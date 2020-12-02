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
    
//app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//middleware
app.use(cors())
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


// create a profile
app.post("/student/temp/createprofile/:id", async(req, res) => {
    try { 

        const {id} = req.params;

        const {sid, password, name, cpi, gender, address, email,placedstatus,imageurl} = req.body;
        const newProfile = await pool.query("INSERT INTO student(stu_id, password, name, cpi, gender, address, email, placed_stats,resume_path,profile_photo) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9,$10)", [sid, password, name, cpi, gender, address, email, placedstatus, sid,imageurl])
        //console.log(newProfile);
        res.json(newProfile.rows[0]);
        //console.log(req.params)
    } catch (err) {
        console.error(err.message)
    }
})

app.post("/temp/placementoffice/createprofile/:id", async(req, res) => {
    try { 

        const {id} = req.params;
        

        const {sid, password, name, designation,imageurl} = req.body;
        const newProfile = await pool.query("INSERT INTO placement_officer(placement_id, password, name, designation,profile_photo) VALUES($1, $2, $3, $4,$5 )", [sid, password, name, designation,imageurl])
       // res.json(newProfile.rows[0]);
       // res.json(result.rows[0]);
        //console.log(req.params)
    } catch (err) {
        console.error(err.message)
    }
})

app.get("/student/temp/profile/:id", async(req, res) => {
    try{
        const { id } = req.params;
        console.log(id);
        const wholeProfile = await pool.query("SELECT * FROM student WHERE stu_id=$1", [id]);
        res.json(wholeProfile.rows)
    } catch(err){
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




app.get("/placementoffice/temp/profile/:id", async(req, res) => {
    try{
        const { id } = req.params;

        console.log("show profile",id);
        const wholeProfile = await pool.query("SELECT * FROM placement_officer WHERE placement_id=$1", [id]);
        res.json(wholeProfile.rows)
    } catch(err){
        console.error(err.message)
    }
}) 

app.get("/placementoffice/temp/profile/photo/:id", async(req, res) => {
    try{
        const { id } = req.params;
       // console.log(id);
        const wholeProfile = await pool.query("SELECT * FROM placement_officer WHERE placement_id=$1",[id]);
        //console.log(wholeProfile.rows)
        res.json(wholeProfile.rows[0])
    } catch(err){
        console.error(err.message)
    }
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

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})