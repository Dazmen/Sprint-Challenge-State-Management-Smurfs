import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurfs } from '../actions/getSmurfs';

const SmurForm = ({postSmurfs}) => {
    const [ smurfInput, setSmurfInput ] = useState({
        name: '',
        age: '',
        height: '',
        isEditing: false
    });
    
    const changeHandler = (e) => {
        setSmurfInput({
            ...smurfInput,
            [e.target.name]: e.target.value
        })
    }; 
    
    const submitHandler = (e) => {
        e.preventDefault();
        postSmurfs(smurfInput);
        setSmurfInput({
            name: '',
            age: '',
            height: '',
        });
    };
    

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Smurf's Name</label>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={changeHandler}
                    value={smurfInput.name}/>
            </div>

            <div>
                <label>Smurf's Age</label>
                <input 
                    type='text'
                    name='age'
                    placeholder='age'
                    onChange={changeHandler}
                    value={smurfInput.age}/>
            </div>

            <div>
                <label>Smurf's Height</label>
                <input 
                    type='text'
                    name='height'
                    placeholder='height'
                    onChange={changeHandler}
                    value={smurfInput.height}/>
            </div>
            <button> Submit!</button>
        </form>
    )
};

export default connect(() => {}, {postSmurfs})(SmurForm)
