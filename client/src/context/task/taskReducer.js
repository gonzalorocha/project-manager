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


export default (state, action) => {
    switch(action.type) {
        case TASK_PROJECT: 
        return {
            ...state, //copy of the state
            projectTasks: action.payload
        } 
        case ADD_TASK: 
        return {
            ...state, //copy of the state
            tasks: [action.payload,...state.tasks],
            error: false
        } 
        case ERROR_TASK: 
        return {
            ...state, //copy of the state
            error: true
        } 
        case DELETE_TASK: 
        return {
            ...state, //copy of the state
            tasks: state.tasks.filter( t => t._id !== action.payload)
        } 
        case UPDATE_TASK: 
        return {
            ...state, //copy of the state
            tasks: state.tasks.map(task => task._id === action.payload.id ? 
                task = action.payload
                : task),
            selectedTask: null
        } 
        case STATE_TASK: 
        return {
            ...state, //copy of the state
            tasks: state.tasks.map(task => task._id === action.payload.id ? 
                                        task = action.payload
                                        : task)
        } 
        case ACTUAL_TASK: 
        return {
            ...state, //copy of the state
            selectedTask: action.payload
        } 
        case CLEAN_TASK: 
        return {
            ...state, //copy of the state
            selectedTask: null
        } 
        default: 
            return state;
    }
}