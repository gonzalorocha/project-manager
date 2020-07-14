import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const Login = () => {
    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

    }

    return ( 
        <div className="form-user">
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