import React from 'react'
import Sidebar from '../layout/Sidebar'
import Bar from '../layout/Bar'
import FormTask from '../task/FormTask';
import ListTask from '../task/ListTask';

const Projects = () => {
    return ( 
        <div className="container-app">
            <Sidebar/>
            <div className="principal-section">
                <Bar/>

                <main>
                    <FormTask />    
                    <div className="container-task">
                        <ListTask/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Projects;