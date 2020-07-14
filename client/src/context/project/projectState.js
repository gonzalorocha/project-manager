import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { FORM_PROJECT, GET_PROJECTS } from '../../types'




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
        visible: false
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

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                visible: state.visible,
                seeForm,
                getProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState