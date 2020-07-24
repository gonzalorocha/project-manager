import React, { useContext, useEffect, Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from './../../context/auth/authContext';

const PrivateRoutes = ({ component: Component, ...props}) => {

    const authContext = useContext(AuthContext);
    const { auth, loading, getUser } = authContext;

    useEffect(() => {
        getUser();
    }, [])

    return (
        <Route {...props} render={props => !auth && !loading ? (
            <Redirect to="/"/>
        ): (
            <Component {...props} />
        )}
        />
    );
}

export default PrivateRoutes;