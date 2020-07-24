import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Projects from './components/project/Projects'

//Context 
import ProjectState from './context/project/projectState';
import TaskState from './context/task/taskState';
import AlertState from './context/alert/alertState';
import AuthState from './context/auth/authState';
import tokenAuth from './config/userAuth';
//Higher order component
import PrivateRoutes from './components/routes/PrivateRoutes'


const token = localStorage.getItem("projectToken");
if (token) {
    tokenAuth(token);
}


const App = () => {
    return (
        <ProjectState>
            <TaskState>
                <AlertState>
                    < AuthState >
                        <Router>
                            <Switch>
                                <Route exact path="/" component={Login}/>
                                <Route exact path="/register" component={Register}/>
                                <PrivateRoutes exact path="/project" component={Projects}/>
                            </Switch>
                        </Router>
                    </AuthState>
                </AlertState>
            </TaskState>
        </ProjectState>
    );
}

export default App;
