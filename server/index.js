const express= require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const StudentModel= require('./models/Students')

const app = new express()
mongoose.connect('mongodb://localhost:27017/studentsdb')
app.use(cors())
app.use(express.json())

app.get('/getstudents',(req,res)=>{
    StudentModel.find({})
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})
app.get("/getStudentById/:id", (req, res) => {
    const id = req.params.id;
    StudentModel.findById({ _id: id })
      .then((students) => res.json(students))
      .catch((err) => res.json(err));
  });
  app.put('/updateStudent/:id',(req,res)=>{
    const id=req.params.id
    StudentModel.findByIdAndUpdate({_id:id},{
      name:req.body.name,
      email:req.body.email,
      phone:req.body.phone
    })
    .then(student=>res.json(student))
    .catch(err=>res.json(err))
  })
  app.delete('/deleteStudent/:id',(req,res)=>{
    const id=req.params.id
    StudentModel.findByIdAndDelete({_id:id})
    .then(student=>res.json(student))
    .catch(err=>res.json(err))
  })
  
app.post('/savestudent',(req,res)=>{
    StudentModel.create(req.body)
    .then(student=>res.json(student))
    .catch(err=>res.json(err))
})

app.listen('3004',()=>{
console.log("Server Ruring")
})