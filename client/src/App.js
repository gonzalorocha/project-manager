import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Projects from './components/project/Projects'

//Context 
import ProjectState from './context/project/projectState';


const App = () => {
    return (
        <ProjectState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/project" component={Projects}/>
                </Switch>
            </Router>
        </ProjectState>
    );
}

export default App;
