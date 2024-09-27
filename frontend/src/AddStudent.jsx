import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddStudent() {
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const navigator=useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3004/savestudent', { name, phone, email })
            .then(res => {console.log(res)
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
                            <h3>Student Registration</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={Submit}>
                                <div className="mb-3">
                                    <label>Name</label>
                                    <input type='text' className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Phone</label>
                                    <input type='text' className="form-control"
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input type='text' className="form-control"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-sm btn-success">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default AddStudent;