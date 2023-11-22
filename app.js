


const express = require("express")
const connectDB = require("./db")
const Students = require("./model/studentsmodel")

const app = express()

app.use(express.json())


app.get("/",  (req, res)=>{
    res.status(200).json({
        message: "welcome to our backend"
    })
})



app.get("/students", async (req, res)=>{

    const allstudents = await Students.find()
    return res.status(200).json({
        message: "succes",allStudents
    })
})
// const allStudents = await Students.find()
// return res.status(200).json({
//     message: " succesfully",
//     count: allStudents.length,
//     allStudents
// })

app.post("/student", async (req, res)=>{
    const newStudent = new Students(req.body)
    console.log(req.body);

    await newStudent.save()

    return res.status(200).json({
        message: "student profile added successfully"
    })
})



app.listen(8000, ()=>{
    console.log(`server running`)
})