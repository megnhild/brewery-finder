import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import AllBreweries from './Components/AllBreweries';
// import SearchResults from './Components/SearchResults';

class App extends Component {
  // Classes must have constructors if initial variables are to be set automatically
  state = {
      breweries: []
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries')
    .then(res => res.json())
    .then((data) => {
      this.setState({ breweries: data })
    })
    .catch(console.log)
  }

  // async componentDidMount() {
  //   const response = await fetch('https://api.openbrewerydb.org/breweries')
  //   const json = await response.json()
  //   console.log(json)
  //   this.setState({ breweries: json.results })
  // }

  render () {
    return (
      <div>
        <div>
          <Header />
          <Body />
          {/* <SearchResults /> */}
        </div>
        {/* <div>
          <AllBreweries breweries={this.state.breweries}/>
        </div> */}
      </div>
    );
  }
}

export default App;