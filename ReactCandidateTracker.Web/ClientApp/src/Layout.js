import React from 'react';
import { Link } from 'react-router-dom';
import { useCandidateCount } from './CandidateContext';

const Layout = (props) => {

    const { PendingCount, ConfirmedCount, RefusedCount } = useCandidateCount();

    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                    <div className="container">
                        <span className="navbar-brand">Candidate Tracker</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to='/' className='nav-link text-light'>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/AddCandidate' className='nav-link text-light'>
                                        Add Candidate
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/pending' className='nav-link text-light'>
                                        Pending ({PendingCount})
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/confirmed' className='nav-link text-light'>
                                        Confirmed ({ConfirmedCount})
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/refused' className='nav-link text-light'>
                                        Refused ({RefusedCount})
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div>
    )
}

export default Layout;