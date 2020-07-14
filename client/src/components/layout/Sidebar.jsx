import React from 'react';
import NewProject from './../project/NewProject'
import ListProject from './../project/ListProject'

const Sidebar = () => {
    return (  
        <aside className="">
            <h1>
                <span>Project manager</span>
                <NewProject />
                <div className="project">
                    <h2>Your projects</h2>
                </div>
                <ListProject />
            </h1>
        </aside>
    );
}
 
export default Sidebar;