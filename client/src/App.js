import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Projects from './components/project/Projects'

//Context 
import ProjectState from './context/project/projectState';
import TaskState from './context/task/taskState';
import AlertState from './context/alert/alertState';

const App = () => {
    return (
        <ProjectState>
            <TaskState>
                < AlertState >
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/project" component={Projects}/>
                        </Switch>
                    </Router>
                </AlertState>
            </TaskState>
        </ProjectState>
    );
}

export default App;
