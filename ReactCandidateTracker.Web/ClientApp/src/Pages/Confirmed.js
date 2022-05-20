import React, { useState, useEffect } from 'react';
import TableRowWithNotes from '../Components/TableRowWithNotes';
import axios from 'axios';

const Confirmed = () => {

    const [Candidates, setCandidates] = useState([]);
    const [ViewNotes, setViewNotes] = useState(true);

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('/api/Candidate/GetConfirmedCandidates')
            setCandidates(data);
        }
        getCandidates();
    }, [])

    const onToggleNotesClick = () => {
        setViewNotes(!ViewNotes);
    }

    return (
        <div className="container">
            <h1>Confirmed</h1>
            <button className="btn btn-warning" onClick={onToggleNotesClick}>Toggle Notes</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {!!ViewNotes && < th > Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {Candidates.map(c => <TableRowWithNotes candidate={c} key={c.id} ViewNotes={ViewNotes} />)}
                </tbody>
            </table>
        </div>)
}
export default Confirmed;