import React, { useEffect } from 'react';
//1.b import connect from react-redux
import { connect } from 'react-redux';
// a.1 import the action
import fetchVideos from '../actions';
import Video from './Video';

// 1.a Create a component to connect
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

//2.a tells connect which pieces of state to pass to the component
//2.b takes state (whatever the reducer is returning -- axios call to api)
const mapStateToProps = state => {
    console.log(state)
    //2.c the properties (left hand-side:) returned are what gets passed as props
    //2.d the values (:right hand-side)returned are properties from the state object(reducer)
    return {
        footballVideos: state.footballVideos,
        isFetching: state.isFetching,
        error: state.error
    };
}

//1.c Instead of exporting component, export connect func
//1.d Inovke connect twice
//  - First call, pass in a mapStateToProps function and object(action)
//  - Second call, pass in component being connected
export default connect(mapStateToProps, {fetchVideos})(FootballVideos);

