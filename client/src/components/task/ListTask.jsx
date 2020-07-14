import React from 'react';
import Task from './Task';

const ListTask = () => {
    const tasks = [
        { 
            name: 'task 1 ',
            state: true
        },
        { 
            name: 'task 2 ',
            state: true
        },{ 
            name: 'task 3 ',
            state: false
        },{ 
            name: 'task 4 ',
            state: true
        },
    ]

    return (
        <div>
            <h2>Project: Project 1</h2>
            <button
                type="button"
                className="btn btn-danger"
            >
                Delete project &times;
            </button>
            <ul className="list-task">
                {
                    tasks.length === 0 
                    ?(<li className="task"><p>No tasks</p></li>)
                    :
                    tasks.map((task)=>(
                        <Task task={task}/>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default ListTask;