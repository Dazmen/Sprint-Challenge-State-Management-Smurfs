import React, { useState } from 'react';
import { connect } from 'react-redux';
import { putSmurf } from '../actions/getSmurfs';

const EditSmurfForm = ({smurf, putSmurf}) => {
    const [ editSmurf, setEditSmurf ] = useState({
        name: smurf.name,
        age: smurf.age,
        height: smurf.height,
        id: smurf.id,
        isEditing: smurf.isEditing
    }) 
    const editHandler = (e) => {
        setEditSmurf({
            ...editSmurf,
            [e.target.name]: e.target.value
        })
    };
    const editSubmitHandler = (e) => {
        e.preventDefault();
        setEditSmurf({
            ...editSmurf,
            isEditing: false
        })
        putSmurf(editSmurf);
    };

    return(
        <form onSubmit={editSubmitHandler}>
            <div>
                <label>Smurf's Name</label>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={editHandler}
                    value={editSmurf.name}/>
            </div>

            <div>
                <label>Smurf's Age</label>
                <input 
                    type='text'
                    name='age'
                    placeholder='age'
                    onChange={editHandler}
                    value={editSmurf.age}/>
            </div>

            <div>
                <label>Smurf's Height</label>
                <input 
                    type='text'
                    name='height'
                    placeholder='height'
                    onChange={editHandler}
                    value={editSmurf.height}/>
            </div>
            <button> Submit!</button>
        </form>
    )
};

export default connect(() => {}, {putSmurf})(EditSmurfForm)