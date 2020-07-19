import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {v4 as uuid} from 'uuid'

import { 
    TASK_PROJECT,
    ADD_TASK,
    ERROR_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    STATE_TASK,
    ACTUAL_TASK,
    CLEAN_TASK
} from './../../types';
import Task from '../../components/task/Task';

const TaskState = props => {
    const tasks = [
        { 
            id:1, 
            projectId: 1,
            name: 'task 1 ',
            state: true
        },
        { 
            id:2, 
            projectId: 2,
            name: 'task 2 ',
            state: true
        },{ 
            id:3, 
            projectId: 2,
            name: 'task 3 ',
            state: false
        },{ 
            id:4, 
            projectId: 3,
            name: 'task 4 ',
            state: true
        },{ 
            id:5, 
            projectId: 2,
            name: 'task 5 ',
            state: true
        },{ 
            id:6, 
            projectId: 2,
            name: 'task 6 ',
            state: true
        },{ 
            id:7, 
            projectId: 3,
            name: 'task 7 ',
            state: true
        },{ 
            id:8, 
            projectId: 3,
            name: 'task 8 ',
            state: true
        },{ 
            id: 9, 
            projectId: 3,
            name: 'task 9',
            state: true
        }
    ]
    
    const initialState = {
        tasks: tasks,
        projectTasks: [],
        error: false,
        selectedTask: null
    }

    const [ state, dispatch ] = useReducer(TaskReducer, initialState);

    //Get task
    const getTasks = (projectId) => {
        dispatch({
            type: TASK_PROJECT,
            payload: projectId
        })
    } 

    const addTask = (task) => {
        task.id = uuid;
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const errorTask = () => {
        dispatch({
            type: ERROR_TASK,
        })
    }

    const deleteTask = (taskId) => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    }

    const updateTask = (task) => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    const changeStateTask = (task) => {
        dispatch({
            type: STATE_TASK,
            payload: task
        })
    }

    const saveActualTask = (task) => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    } 

    const cleanSelectedTask = () => {
        dispatch({
            type: CLEAN_TASK,
        })
    }

    return (
        <TaskContext.Provider
            value={{ 
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                error: state.error,
                selectedTask: state.selectedTask,
                getTasks,
                addTask,
                errorTask,
                deleteTask,
                updateTask,
                changeStateTask,
                saveActualTask,
                cleanSelectedTask
            }}

        >
            {props.children}
        </TaskContext.Provider>

    )
}

export default TaskState;