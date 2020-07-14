import React, { useState } from 'react';
import {Link} from 'react-router-dom'



const Register = () => {
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
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