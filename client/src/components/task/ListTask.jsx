import React, { useContext } from 'react';
import Task from './Task';
import projectContext from './../../context/project/projectContext';
import taskContext from './../../context/task/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListTask = () => {
    const projectsContext = useContext(projectContext);
    const { selectedProject, deleteProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { projectTasks } = tasksContext;

    const handleOnClick = () => {
        deleteProject(selectedProject.id)
    }


    if (!selectedProject) return <h2>select one project</h2>;

    return (
        <div>
            <h2>{selectedProject.name}</h2>
            <button
                type="button"
                className="btn btn-danger"
                onClick={handleOnClick}
            >
                Delete project &times;
            </button>
            <ul className="list-task">
                {
                    projectTasks.length === 0 
                    ?(<li className="task"><p>No tasks</p></li>)
                    :
                    <TransitionGroup>
                        {
                            projectTasks.map((task)=> (
                                <CSSTransition 
                                    key={task.id}
                                    timeout={200}
                                    classNames="Task"
                                >
                                    <Task task={task}/>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                }
            </ul>
        </div>
    );
};

export default ListTask;