import React, { useReducer } from 'react';

import {v4 as uuid} from 'uuid'
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, ERROR_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from '../../types';

const ProjectState = props => {

    const projectsList = [
        {
            id: 1,
            name: 'project 1'
        },
        {
            id: 2,
            name: 'project 2'
        },
        {
            id: 3,
            name: 'project 3'
        },
    ] 

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

    const getProject = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projectsList
        })
    }

    const addProject = (project) => {
        project.id = uuid;
        dispatch({
            type: ADD_PROJECTS,
            payload: project
        })
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

    const deleteProject = (id) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: id
        })
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