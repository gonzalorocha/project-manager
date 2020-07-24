import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import clientAxios from './../../config/axios';
import tokenAuth from './../../config/userAuth';


import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    CLOSE_SESSION,
} from '../../types'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('projectToken'),
        auth: null,
        user: null,
        message: null,
        loading: true,
    }
    
    const [state, dispatch] = useReducer(authReducer, initialState);


    const registerUser = async(user) => {
        try {
            const res = await clientAxios.post('api/user', user);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
            getUser();
        } catch(err) {
            console.log(err.response.data.msg);
            const alert = {
                msg: err.response.data.msg,
                category: 'alert-error'
            }
            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            })
        }
    }

    const getUser = async() => {
        const token = localStorage.getItem('projectToken');
        if (token) {
            tokenAuth(token);
        }

        try{
            const res = await clientAxios.get('api/auth')
            dispatch({
                type: GET_USER,
                payload: res.data.user
            })

        } catch(err){
            console.log(err);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    const login = async(user) => {
        try {
            const res = await clientAxios.post('api/auth',user);
             dispatch({
                 type: LOGIN_SUCCESS,
                 payload: res.data
             })

            getUser();
        } catch (err) {
            console.log(err.response.data.msg);
            const alert = {
                msg: err.response.data.msg,
                category: 'alert-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    const logout = async() => {
        try {
            dispatch({
                type: CLOSE_SESSION
            })
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                login,
                getUser,
                logout
            }}
        >
            {props.children}
        </authContext.Provider>


    )
}

export default AuthState;