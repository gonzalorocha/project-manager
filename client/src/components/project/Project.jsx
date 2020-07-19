import React, { useContext }  from 'react'
import projectContext from './../../context/project/projectContext';
import taskContext from './../../context/task/taskContext';



const Project = ({project}) => {
    const projectsContext = useContext(projectContext);
    const { selectProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { getTasks } = tasksContext;
    
    const handleOnClick = () => {  
        selectProject(project);
        getTasks(project.id);
    }

    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={handleOnClick}
            >{project.name}</button>
        </li>
     );
}
 
export default Project;