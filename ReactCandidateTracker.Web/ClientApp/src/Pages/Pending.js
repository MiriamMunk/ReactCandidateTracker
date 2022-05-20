import React, { useState, useEffect } from 'react';
import TableRow from '../Components/TableRow';
import axios from 'axios';

const Pending = () => {

    const [Candidates, setCandidates] = useState([]);

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/Candidate/GetCandidates')
            setCandidates(data);
        }
        getCandidates();
    }, [])

    return (
        <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>View Details</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {Candidates.map(c => <TableRow candidate={c} key={c.id} />)}
                </tbody>
            </table>
        </div>
    )
}
export default Pending;