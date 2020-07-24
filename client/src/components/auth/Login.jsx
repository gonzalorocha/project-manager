import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import AlertContext from "./../../context/alert/alertContext";
import AuthContext from "./../../context/auth/authContext";

const Login = (props) => {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    });

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, auth, login } = authContext;
    useEffect(() => {
        if (auth) {
            props.history.push("/project");
        }
        if (message) {
            showAlert(message.msg, message.category);
        }
    }, [message, auth, props.history]);

 

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (user.email.trim() === '' || user.password.trim() === '') {
            showAlert("Complete all the fields", "alert-error");
        }

        login(user);
    }

    return ( 
        <div className="form-user">
            {
                alert && (
                    <div className={`alert ${alert.category}`}>
                        {alert.msg}
                    </div>
                )
            }
            <div className="container-form shadow-dark">
                <h1>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="field-form">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email..."
                            value={user.email}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password..."
                            value={user.password}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="field-form">
                        <input type="submit" className="btn btn-primary btn-block" value="Login"/>

                    </div>
                </form>
                <Link to={'/register'} className="link-account">
                    New account
                </Link>
            </div>
        </div>
    ); 
}
 
export default Login;