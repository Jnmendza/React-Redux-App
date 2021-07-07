//1.a Import the action types from the action files
import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
//1.b move the state tree you started with into variable initialState
const initialState = {
    footballVideos: [],
    isFetching: false,
    error: ''
}

/* Using a switch case to check the action type of the dispatched action, create
an updated state tree based on the action type and the action payload 

Each case in the switch statement returns the new updated state tree
*/

//1.c Create reducer function, pass in state with a default value of initial state
// and the dispatched action

const reducer = (state = initialState, action) => {
    //switch is used to perform different actions based on different conditions
    switch(action.type) {
        //1.d Make a case for each action type
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ''

            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                footballVideos: [...action.payload]    
            }
        case FETCH_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: [...action.payload]     
        }
        default:
            //1.e Return state untouched
            return state;
    }
}

export default reducer;