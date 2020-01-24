import { GET_SMURFS, DELETE_SMURF, POST_SMURFS } from '../actions/getSmurfs';

const initialState = {
    smurfs: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                smurfs: action.payload
            };
        case POST_SMURFS:
            return {
                smurfs: action.payload
            };
        case DELETE_SMURF:
            return {
                smurfs: action.payload
            };
        default:
            return state;
    }
}

export default reducer;