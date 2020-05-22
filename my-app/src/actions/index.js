import axios from 'axios';

//1.a action type is created to avoid hidden bugs and used as the type in the action
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

//1.b action creator that returns an action object
/*
When the action creator is invoke and the action is returned
it will be dispatched to the reducer
*/ 
const fetchVideos = () => dispatch => {
        dispatch({ type: START_FETCHING})
        axios   
            .get('https://www.scorebat.com/video-api/v1/')
            .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data}))
            .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response}))
};


export default fetchVideos;


// dispatch({ type: FETCH_SUCCESS, payload: response.data})

