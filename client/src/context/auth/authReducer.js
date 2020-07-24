import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    CLOSE_SESSION,
} from '../../types'

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('projectToken', action.payload.token);
            return {
                ...state,
                auth: true,
                message: null,
                loading: false,
            }
        case REGISTER_ERROR:
            return {
                ...state,
                token: null,
                message: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload,
                loading: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('projectToken', action.payload.token);
            return {
                ...state,
                auth: true,
                message: null,
                loading: false
            }
        case LOGIN_ERROR:
            localStorage.removeItem('projectToken');
            return {
                ...state,
                token: null,
                message: action.payload,
                loading: false
            }
        case CLOSE_SESSION:
            localStorage.removeItem('projectToken');
            return {
                ...state,
                auth: false,
                message: null,
                user: null,
                loading: false
            }
        default:
            return state;
    }

}