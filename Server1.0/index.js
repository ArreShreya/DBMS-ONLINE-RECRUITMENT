const express = require("express")
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

//ROUTEs

// create a profile
app.post("/student/temp/createprofile/:id", async(req, res) => {
    try { 

        const {id} = req.params;

        const {sid, password, name, cpi, gender, address, email, placedstats, resumepath} = req.body;
        const newProfile = await pool.query("INSERT INTO student(stu_id, password, name, cpi, gender, address, email, placed_stats, resume_path) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)", [sid, password, name, cpi, gender, address, email, placedstats, resumepath])
 
        res.json(newProfile.rows[0]);
        //console.log(req.params)
    } catch (err) {
        console.error(err.message)
    }
})


// get the whole profile
// app.get("/student/temp/profile", async(req, res) => {
//     try {
//         /*const { id } = req.params; */
        
//         const wholeProfile = await pool.query("SELECT * FROM student");

//         res.json(wholeProfile.rows)
//     } catch (err) {
//         console.error(err.message)
//     }
// })



app.get("/student/temp/profile/:id", async(req, res) => {
    try{
        const { id } = req.params;
        const wholeProfile = await pool.query("SELECT * FROM student WHERE stu_id = $1", [id]);
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

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})