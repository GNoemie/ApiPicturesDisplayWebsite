import { combineReducers } from 'redux';
import { REQUEST_NEXT, RECEIVE_NEXT } from '../actions/actions';

function position(state = {}, action) {
    switch (action.type) {
        case REQUEST_NEXT:
            console.log("REQUESTNEXT");
            return {
                cursor: state.cursor + state.amount,
                amount: state.amount
            }
        default:
            return state;
    }

}

function pictures(state = {}, action) {
    switch (action.type) {
        case RECEIVE_NEXT:
            console.log("REQUESTNEXT");
            return action.pictures;
        default:
            return state;
    }

}


const epipic = combineReducers({
    position,
    pictures
})

export default epipic;