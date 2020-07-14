import React, { useContext, useEffect } from 'react'
import Project from './Project'
import projectContext from './../../context/project/projectContext'


const ListProject = () => {
    const projectsContext = useContext(projectContext);
    const { projects, getProject } = projectsContext;

    useEffect(()=>{
        getProject();
    },[])

    if (projects.length === 0) {
        return null;
    }
    console.log(projects);

    return ( 
        <ul className="list-project">
            {
                projects.map((p)=> (
                    <Project key={p.id} project={p} />
                ))
            }
        </ul>
        
     );
}
 
export default ListProject;