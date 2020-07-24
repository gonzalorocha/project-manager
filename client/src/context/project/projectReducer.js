import { 
    FORM_PROJECT, 
    GET_PROJECTS, 
    ADD_PROJECTS, 
    ERROR_FORM,
    ACTUAL_PROJECT,
    DELETE_PROJECT
} from '../../types'

//The reducer only change the state
export default(state, action) => {
    switch(action.type) {
        case FORM_PROJECT: 
            return {
                ...state, //copy of the state
                visible: true
            }
        case GET_PROJECTS: 
            return {
                ...state, //copy of the state
                projects: action.payload
            }
        case ADD_PROJECTS: 
        return {
            ...state, //copy of the state
            projects: [...state.projects, action.payload], //add the new project to the array
            visible: false,
            errorForm: false
        }
        case ERROR_FORM: 
            return {
                ...state, //copy of the state
                errorForm: true
            }
        case ACTUAL_PROJECT: 
            return {
                ...state, //copy of the state
                selectedProject: action.payload
            }
        case DELETE_PROJECT: 
            return {
                ...state, //copy of the state
                projects: state.projects.filter(p => p._id !== action.payload),
                selectedProject: null
            }
        default: 
            return state;
    }
}