import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/getSmurfs';

const SmurfCard = ({smurf, deleteSmurf}) => {

    return(
        <div>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <button>Edit</button>
            <button onClick={() => deleteSmurf(smurf)}>Delete</button>
        </div>
    )
}

export default connect(() => {}, { deleteSmurf })(SmurfCard);

// onClick={() => deleteSmurf(smurf)}