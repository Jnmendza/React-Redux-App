import axios from 'axios';

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';


const fetchVideos = () => dispatch => {
        dispatch({ type: START_FETCHING})
        axios   
            .get('https://www.scorebat.com/video-api/v1/')
            .then(response => dispatch({ type: FETCH_SUCCESS, payload: response.data}))
            .catch(error => dispatch({ type: FETCH_FAILURE, payload: error.response}))
};


export default fetchVideos;


// dispatch({ type: FETCH_SUCCESS, payload: response.data})

