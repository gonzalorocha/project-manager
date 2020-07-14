import React, { Fragment, useContext, useState } from 'react'
import projectContext from './../../context/project/projectContext';


const NewProject = () => {

    const [ project, saveProject ] = useState({
        name: ''
    });
    //Context
    const projectsContext = useContext(projectContext);
    const { visible, seeForm } = projectsContext;

    const handleOnChange = (e) => {
        saveProject({
            ...project, 
            [e.target.name]: e.target.value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <Fragment>
            <button
                type="button"
                className= "btn btn-block btn-primary"
                onClick={() => seeForm()}
            >
                New project
            </button>
            {
                visible && 
                (
                    <form 
                        className="form-new-project"
                        onSubmit={handleOnSubmit}
                    >
                        <input 
                            type="text"
                            className="input-text"
                            placeholder="Project name"
                            name="name"
                            value={project.name}
                            onChange={handleOnChange}
                        />
                        <input 
                            type="submit"
                            className="btn btn-primary btn-block"
                            value="Add project"
                        />
                    </form>
                )
            }
        </Fragment>
     );
}
 
export default NewProject;