import { FORM_PROJECT, GET_PROJECTS } from '../../types'

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
        default: 
            return state;
    }
}