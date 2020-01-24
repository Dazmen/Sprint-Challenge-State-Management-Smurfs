import React from 'react';
import { connect } from 'react-redux';
import SmurfCard from './smurfCard'

const SmurfList = ({smurfs}) => {
    console.log(smurfs);
    console.log(smurfs[0]);
    return (
        <div>
            {smurfs.length > 0 ? 
                smurfs.map(smurf =>{
                    return <SmurfCard key={smurf.id} smurf={smurf} />
                }) :
                <h2>There are no smurfs!</h2>
            }
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfList)