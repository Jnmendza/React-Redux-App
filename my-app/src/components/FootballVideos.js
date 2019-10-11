import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import fetchVideos from '../actions';
import Video from './Video';

const FootballVideos = props => {
    useEffect( () => {
        props.fetchVideos();
    }, []);
    if(props.isFetching) {
        return <h2>Loading Videos...</h2>
    }
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.footballVideos.map((video, index) => (
                <Video video={video} key={index}/>
            ))}
        </div>
    );
}


const mapStateToProps = state => {
    console.log(state)
    return {
        footballVideos: state.footballVideos,
        isFetching: state.isFetching,
        error: state.error
    };
}

export default connect(mapStateToProps, {fetchVideos})(FootballVideos);

