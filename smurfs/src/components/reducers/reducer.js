import { GET_SMURFS, 
    DELETE_SMURF, 
    POST_SMURFS, 
    PUT_SMURF, 
    TOGGLE_EDIT } from '../actions/getSmurfs';

const initialState = {
    smurfs: [],
    
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
        case PUT_SMURF:
            console.log('the payload',action.payload)
            return {
                smurfs: action.payload
            };
            
        case TOGGLE_EDIT:
            return {
                smurfs: state.smurfs.map(smurf => {
                    if(smurf.id === action.payload.id){
                        return{
                            ...smurf,
                            isEditing: !action.payload.isEditing
                        } 
                } else {
                    return smurf
                }
            })
            }
        default:
            return state;
    }
}

export default reducer;