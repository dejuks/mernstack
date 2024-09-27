import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const { id } = useParams()
    const navigator = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:3004/getStudentById/${id}`)
            .then(res => {
                console.log(res)
                setName(res.data.name)
                setPhone(res.data.phone)
                setEmail(res.data.email)
            })
            .catch(err => console.log(err))
    }, [id]);
    const Update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3004/updatestudent/' + id, { name, phone, email })
            .then(result => {
                console.log(result)
                navigator('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>Edit Student</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={Update}>
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input type="text" className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Salary</label>
                                    <input type="text" className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Phone</label>
                                    <input type="text" className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-sm btn-primary">Update</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditStudent;