import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandidateContext = createContext();

const CandidateContextComponent = ({ children }) => {

    const [PendingCount, setPendingCount] = useState(0);
    const [ConfirmedCount, setConfirmedCount] = useState(0);
    const [RefusedCount, setRefusedCount] = useState(0);


    const UpdateCandidateCount = async () => {
        const { data } = await axios.get('/api/Candidate/GetCandidateCount');
        setPendingCount(data.pending);
        setConfirmedCount(data.confirmed);
        setRefusedCount(data.refused);
    }

    useEffect(() => {
        UpdateCandidateCount();
    }, [])

    return (
        <CandidateContext.Provider value={{ PendingCount, ConfirmedCount, RefusedCount, UpdateCandidateCount }}>
            {children}
        </CandidateContext.Provider>
    )
}

const useCandidateCount = () => {
    return useContext(CandidateContext);
}

export { CandidateContextComponent, useCandidateCount };
