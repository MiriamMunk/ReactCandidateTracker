import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useCandidateCount} from '../CandidateContext';


const AddCandidate = () => {
    const { UpdateCandidateCount } = useCandidateCount();
    const history = useHistory;
    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', notes: '' })

    const onTextChange = e => {
        const copy = { ...candidate };
        copy[e.target.name] = e.target.value;
        setCandidate(copy);
    }

    const AddCandidate = async () => {
        await axios.post('/api/Candidate/AddCandidate', candidate)
        UpdateCandidateCount();
        history.push('/');
    }
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <form onSubmit={AddCandidate}>
                            <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={onTextChange} />
                            <br />
                            <input type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={onTextChange} />
                            <br />
                            <input type="text" name="email" placeholder="Email" className="form-control" onChange={onTextChange} />
                            <br />
                            <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" onChange={onTextChange} />
                            <br />
                            <textarea rows="5" className="form-control" name="notes" onChange={onTextChange}></textarea>
                            <br />
                            <button className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddCandidate;