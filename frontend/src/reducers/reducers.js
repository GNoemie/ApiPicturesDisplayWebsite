import { combineReducers } from 'redux';
import { 
    REQUEST_NEXT,
    RECEIVE_NEXT, 
    REQUEST_ADD, 
    RECEIVE_ADD,
    REQUEST_DELETE, 
    RECEIVE_DELETE
} from '../actions/actions';

function position(state = {}, action) {
    switch (action.type) {
        case REQUEST_NEXT:
            console.log("REQUESTNEXT");
            return {
                cursor: state.cursor + state.amount,
                amount: state.amount
            }
        case REQUEST_ADD || REQUEST_DELETE:
            return {
                cursor: 0,
                amount: 15
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