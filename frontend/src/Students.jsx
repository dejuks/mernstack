import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students(){

    const [students,setStudent]=useState([])
useEffect((e)=>{
    axios.get('http://localhost:3004/getstudents')
    .then(res=>setStudent(res.data))
    .catch(err=>console.log(err))
},[]);
const deleteHandle=(id)=>{
    axios.delete('http://localhost:3004/deleteStudent/'+id)
    .then(res=>{console.log(res)
        window.location.reload()
    })
    .catch(err=>console.log(err))
}

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h2>Student List
                                <Link to='/create' className="btn btn-sm btn-primary float-end">Add</Link>
                            </h2>
                        </div>
                        <div className="card-body">
                            <table className="table table-stripped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((student,index)=>{
                                        return    <tr key={index}>
                                                <td>{student.name}</td>
                                                <td>{student.phone}</td>
                                                <td>{student.email}</td>
                                                <td>
                                                  
                                                   <Link to={`edit/${student._id}`} className="btn btn-sm btn-warning">Edit</Link>
                                                    <button  onClick={(e)=>deleteHandle(student._id)}  className="btn btn-sm btn-danger">Delete</button>
                                                
                                                </td>
                                            </tr>
                                        })
                                    }
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Students;