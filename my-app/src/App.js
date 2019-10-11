import React from 'react';
import './App.css';
import FootballVideos from './components/FootballVideos';
import { connect } from 'react-redux';


function App() {
  return (
    <div className="App">
      <p>This is the App</p>
      <FootballVideos />
    </div>
  );
}


export default App;

// export default connect(
//   null, {})(App)

