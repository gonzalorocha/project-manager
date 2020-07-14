import React from 'react';

const FormTask = () => {
    return (
        <div >
            <form 
                className="form"
            >
                <div className="container-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Task name"
                        name="name"
                    />
                </div>
                <div className="container-input">
                    <input 
                        type="submit"
                        className="btn btn-primary btn-submit btn-block"
                        placeholder="Add task"
                    />
                </div>

            </form>
            
        </div>
    );
};

export default FormTask;
