import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
// import SearchResults from './Components/SearchResults';

class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  constructor() {
    super();
    this.state = {
      breweries: []
    };
  }

  async componentDidMount() {
    const response = await fetch('https://api.openbrewerydb.org/breweries')
    const json = await response.json()
    console.log(json)
    this.setState({ breweries: json.results })
  }

  render () {
    return (
      <div>
        <Header />
        <Body />
        {/* <SearchResults /> */}
      </div> 
    );
  }
}

export default App;