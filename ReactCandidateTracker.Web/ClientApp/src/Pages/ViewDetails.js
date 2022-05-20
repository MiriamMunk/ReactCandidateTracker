import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCandidateCount } from '../CandidateContext';

const ViewDetails = () => {

    const { id } = useParams();
    const [Candidate, setCandidate] = useState('');
    const [sameStatus, setSameStatus] = useState(true);
    const { UpdateCandidateCount } = useCandidateCount();
    useEffect(() => {
        const getCandidateById = async () => {
            const { data } = await axios.get(`/api/Candidate/GetById?id=${id}`)
            setCandidate(data);
        }
        getCandidateById();
    }, [id])

    const onConfirmClick = async () => {
        await axios.post(`/api/Candidate/updateToConfirmed?id=${id}`);
        setSameStatus(false);
        UpdateCandidateCount();
    }
    const onRefuseClick = async () => {
        await axios.post(`/api/Candidate/updateToRefused?id=${id}`);
        setSameStatus(false);
        UpdateCandidateCount();
    }

    const { firstName, lastName, email, phoneNumber, notes, RegistrationStatus } = Candidate;
    return (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body bg-light">
                <h4>Name: {firstName} {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phoneNumber}</h4>
                <h4>Status: {RegistrationStatus}</h4>
                <h4>Notes:</h4>
                <p>{notes}</p>
                {!!sameStatus &&  < div >
                    <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                    <button className="btn btn-danger" onClick={onRefuseClick}>Refuse</button>
                </div>}
            </div>
        </div>
    )
}
export default ViewDetails;