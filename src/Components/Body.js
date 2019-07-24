import React, { Component } from 'react';
import AllBreweries from './AllBreweries';

class Body extends Component {
  render () {
    return (
      <div class="container">
        {/* resizing columns based on screen size to hold cards with brewery info */}
        <div class="row">
          <AllBreweries />
          {/* <BreweryCard /> */}
        </div>
      </div>
    )
  }
}

export default Body;