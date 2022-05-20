import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './Pages/Home';
import AddCandidate from './Pages/Add';
import Pending from './Pages/Pending';
import Refused from './Pages/Refused';
import Confirmed from './Pages/Confirmed';
import ViewDetails from './Pages/ViewDetails';
import { CandidateContextComponent } from './CandidateContext';

export default class App extends Component {
    render() {
        return (
            <CandidateContextComponent>
                <Layout>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/AddCandidate' component={AddCandidate} />
                    <Route exact path='/pending' component={Pending} />
                    <Route exact path='/refused' component={Refused} />
                    <Route exact path='/confirmed' component={Confirmed} />
                    <Route exact path='/pending/ViewDetails/:id' component={ViewDetails} />
                </Layout>
            </CandidateContextComponent>
        );
    }
}