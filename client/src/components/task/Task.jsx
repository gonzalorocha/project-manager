import React from 'react';

const Task = ({task}) => {
    return (
        <div>
            <li className="task shadow">
                <p>{task.name}</p>
                <div className="state">
                    {task.state ? <button type="button" className="complete">Complete</button> : 
                                <button type="button" className="incomplete">Incomplete</button> 
                    }
                </div>
                <div className="action">
                    <button
                        type="button"
                        className="btn btn-primary"
                    >Edit</button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                    >Delete</button>
                </div>
            </li>
        </div>
    );
};

export default Task;

