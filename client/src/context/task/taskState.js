import React, { useReducer } from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import clientAxios from './../../config/axios'


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

const TaskState = props => {
    const initialState = {
        tasks: [],
        projectTasks: [],
        error: false,
        selectedTask: null
    }

    const [ state, dispatch ] = useReducer(TaskReducer, initialState);

    //Get task
    const getTasks = async(projectId) => {
        try {
            const res = await clientAxios.get(`api/task/${projectId}`);
            console.log(res.data.tasks)
            dispatch({
                type: TASK_PROJECT,
                payload: res.data.tasks
            })
        } catch(err) {
            console.log(err)
        }
    } 

    const addTask = async(task) => {
        try {
            const res = await clientAxios.post('api/task', task);
            dispatch({
                type: ADD_TASK,
                payload: res.data
            })
        } catch(err) {
        }
    }

    const errorTask = () => {
        dispatch({
            type: ERROR_TASK,
        })
    }

    const deleteTask = async(taskId) => {
        try {
            await clientAxios.delete('api/task/${taskId}');
             dispatch({
                 type: DELETE_TASK,
                 payload: taskId
             })
        } catch(err) {
            console.log(err)
        }
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