import Axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const POST_SMURFS = 'POST_SMURFS';
export const DELETE_SMURF = 'DELETE_SMURF';

export const getSmurfs = () => dispatch => {
    Axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
        console.log('get smurf API', res);
        dispatch({ type: GET_SMURFS, payload: res.data})
        })
        .catch(err => {
        console.log('ERROR!!!!', err)
        })
};

export const postSmurfs = (newSmurf) => dispatch => {
    Axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log('newSmurf was posted', res)
            dispatch({ type: POST_SMURFS, payload: res.data})
        })
        .catch(err => {
            console.log('newSmurf was not posted', err)
        })
};

export const deleteSmurf = (smurf) => dispatch => {
    Axios
        .delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res => {
            console.log('smurf has been deleted', res)
            dispatch({ type: DELETE_SMURF, payload: res.data })
        })
        .catch(err => {
            console.log('smurf was not deleted', err)
        })
}