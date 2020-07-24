import React, { useContext, useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import AlertContext from "./../../context/alert/alertContext";
import AuthContext from "./../../context/auth/authContext";


const Register = (props) => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, auth, registerUser } = authContext;

    useEffect(() => {
        if (auth) {
            props.history.push("/project");
        }
        if (message) {
            showAlert(message.msg, message.category);
        }
            

    },[message, auth, props.history])

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, confirm } = user; 

        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirm.trim() === '' ) {
            showAlert("Complete all the fields", "alert-error");
        }

        if (user.password.length < 6) {
            showAlert("Password must be at least 6 character", "alert-error");
        }

        if (user.password !== user.confirm) {
            showAlert("Passwords is not equals", "alert-error");
        }


        registerUser({
            name,
            email,
            password
        });

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
                <h1>New account</h1>
                <form
                    onSubmit={onSubmit}
                >
                     <div className="field-form">
                        <label htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name..."
                            value={user.name}
                            onChange={handleOnChange}
                        />
                    </div>
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
                        <label htmlFor="confirm">
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password..."
                            value={user.confirm}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="field-form">
                        <input type="submit" className="btn btn-primary btn-block" value="Register"/>

                    </div>
                </form>
                <Link to={'/'} className="link-account">
                    Go to login
                </Link>
            </div>
        </div>
    ); 
}
 
export default Register;