import React, { useContext, useEffect,  useState } from 'react';
import projectContext from './../../context/project/projectContext';
import taskContext from './../../context/task/taskContext';

const FormTask = () => {
    const [ task, setTask ] = useState({
        projectId: null,
        name: '',
        state: false,
    })

    const projectsContext = useContext(projectContext);
    const { selectedProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { addTask, error,  selectedTask, errorTask, getTasks, updateTask, cleanSelectedTask } = tasksContext;

    useEffect(()=>{
        if (selectedTask) {
            setTask(selectedTask)
        }
    },[selectedTask])

    if (!selectedProject) return null;

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (task.name === '') {
            errorTask()
            return;
        }

        if (selectedTask) {
            updateTask(task);
            cleanSelectedTask();
        } else {
            task.projectId = selectedProject._id;
            addTask(task);
        }
        setTask({
            projectId: null,
            name: '',
            state: false,
        })
        getTasks(selectedProject._id);
    }

    return (
        <div >
            <form 
                className="form"
                onSubmit={handleOnSubmit}
            >
                <div className="container-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task name"
                        value={task.name}
                        onChange={handleChange}
                        name="name"
                    />
                </div>
                <div className="container-input">
                    <input 
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        value= { !selectedTask ? "Add task" : "Edit task" }
                    />
                </div>
                { 
                    error && (
                        <p className="message error"> Complete the task name </p>
                    )
                }

            </form>
            
        </div>
    );
};

export default FormTask;
