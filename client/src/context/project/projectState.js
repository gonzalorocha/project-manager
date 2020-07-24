import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, ERROR_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from '../../types';
import clientAxios from './../../config/axios'

const ProjectState = props => {

    const initialState = {
        projects: [],
        visible: false,
        errorForm: false,
        selectedProject: null
    }

    //Dispatch for execute the actions  
    const [ state, dispatch ] = useReducer(projectReducer, initialState);


    //Other functions
    const seeForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProject = async() => {
        try{
            const res = await clientAxios.get('api/project');
            console.log(res);
            dispatch({
                type: GET_PROJECTS,
                payload: res.data.projects
            })
        } catch(err) {
            console.log(err);
        }

    }

    const addProject = async(project) => {
        try {
            const res = await clientAxios.post('api/project', project);
            dispatch({
                type: ADD_PROJECTS,
                payload: res.data
            })
        } catch(err) {
            console.log(err);
        }
    }   

    const seeError = () => {
        dispatch({
            type: ERROR_FORM
        })
    }

    const selectProject = (project) => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: project
        })
    }

    const deleteProject = async(id) => {
        try {
            await clientAxios.delete(`api/project/${id}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: id
            })
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                visible: state.visible,
                errorForm: state.errorForm,
                selectedProject: state.selectedProject,
                seeForm,
                getProject,
                addProject,
                seeError,
                selectProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState