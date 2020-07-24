import React, { useContext, useEffect } from 'react'
import AuthContext from "./../../context/auth/authContext";

const Bar = (props) => {
    const authContext = useContext(AuthContext);
    const { user, getUser, logout } = authContext;
    useEffect(() => {
        getUser()
    }, []);

    const handleOnClick = () => {
        logout();
    }

    return ( 
        <header className="app-header">
            {
                user && (
                    <p className="user-name"> Hi, <span>{user.name}</span>  </p>
                )
            }
            <nav className="nav-principal">
                <button className="btn btn-blank btn-primary" onClick={handleOnClick}>Logout</button>
            </nav>
        </header>
     );
}
 
export default Bar;