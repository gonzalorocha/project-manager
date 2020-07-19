import React, { useContext } from 'react';
import taskContext from './../../context/task/taskContext';

const Task = ({task}) => {

    const tasksContext = useContext(taskContext);
    const { deleteTask, getTasks, changeStateTask, saveActualTask } = tasksContext;

    const handleDeleteClick = () => {
        deleteTask(task.id);
        getTasks(task.projectId);
    }

    const handleStateClick = (task) => {
        task.state = !task.state;
        changeStateTask(task);
        getTasks(task.projectId);
    }

    const handleEditClick = (task) => {
        saveActualTask(task);
    }

    return (
        <div>
            <li className="task shadow">
                <p>{task.name}</p>
                <div className="state">
                    {task.state ? <button type="button" className="complete" onClick={() => handleStateClick(task)}>Complete</button> : 
                                <button type="button" className="incomplete" onClick={() => handleStateClick(task)}>Incomplete</button> 
                    }
                </div>
                <div className="action">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleEditClick(task)}
                    >Edit</button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleDeleteClick}
                    >Delete</button>
                </div>
            </li>
        </div>
    );
};

export default Task;

