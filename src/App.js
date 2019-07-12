import React, { Component } from 'react';
import Header from './Components/Header';
import Results from './Components/Results';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Results />
      </div> 
    );
  }
}

export default App;