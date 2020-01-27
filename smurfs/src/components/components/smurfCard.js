import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, toggleEdit } from '../actions/getSmurfs';
import EditSmurfForm from './editSmurfForm';

const SmurfCard = ({smurf, deleteSmurf, toggleEdit}) => {
       
    if(smurf.isEditing === true){
        return (
            <EditSmurfForm smurf={smurf} />
        );
        
    } else {
        return (
            <div>
                <p>Name: {smurf.name}</p>
                <p>Age: {smurf.age}</p>
                <p>Height: {smurf.height}</p>
                <button onClick={() => toggleEdit(smurf)}>Edit</button>
                <button onClick={() => deleteSmurf(smurf)}>Delete</button>
            </div>
        );
    };        
};

export default connect(() => {}, { deleteSmurf, toggleEdit })(SmurfCard);

