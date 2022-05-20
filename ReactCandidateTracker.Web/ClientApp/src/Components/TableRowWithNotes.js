import React from 'react';

const TableRowNotes = ({ candidate, ViewNotes }) => {
    const { firstName, lastName, email, phoneNumber, notes } = candidate;

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            {!!ViewNotes && <td>{notes}</td>}
        </tr>)
}
export default TableRowNotes;