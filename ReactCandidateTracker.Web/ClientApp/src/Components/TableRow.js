import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const TableRow = ({ candidate }) => {
    const { id, firstName, lastName, email, phoneNumber} = candidate;
    return (
        <tr>
            <td>
                <Link to={`/pending/ViewDetails/${id}`} >
                    <button type="button" className="btn btn-link">View Details</button>
                </Link>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
        </tr>)
}
export default TableRow;