import React, { Component } from 'react';
// import { Card, CardColumns } from 'react-bootstrap';
// import BreweryCard from './BreweryCard';

// class AllBreweries extends Component {
//   render () {
//     let breweries = this.props.breweries
//     return breweries.map((brewery, index) => {
//       return (
//         <BreweryCard
//           index={index}
//           brewery={brewery}
//         />
//       )
//     })
//   }
// }

const AllBreweries = ({ breweries }) => {
  return (
    <div>
      {/* {breweries.map((brewery) => ())} */}
        
        <div class="card-columns">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Brewery</h5>
              <h6 class="card-subtitle mb-2 text-muted">City, State</h6>
              <p class="card-text">This is where specific features of the brewery goes.</p>
              <a href="#" class="card-link">View Website</a>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Brewery</h5>
              <h6 class="card-subtitle mb-2 text-muted">City, State</h6>
              <p class="card-text">This is where specific features of the brewery goes.</p>
              <a href="#" class="card-link">View Website</a>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Brewery</h5>
              <h6 class="card-subtitle mb-2 text-muted">City, State</h6>
              <p class="card-text">This is where specific features of the brewery goes.</p>
              <a href="#" class="card-link">View Website</a>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Brewery</h5>
              <h6 class="card-subtitle mb-2 text-muted">City, State</h6>
              <p class="card-text">This is where specific features of the brewery goes.</p>
              <a href="#" class="card-link">View Website</a>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Brewery</h5>
              <h6 class="card-subtitle mb-2 text-muted">City, State</h6>
              <p class="card-text">This is where specific features of the brewery goes.</p>
              <a href="#" class="card-link">View Website</a>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Brewery</h5>
              <h6 class="card-subtitle mb-2 text-muted">City, State</h6>
              <p class="card-text">This is where specific features of the brewery goes.</p>
              <a href="#" class="card-link">View Website</a>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Brewery</h5>
              <h6 class="card-subtitle mb-2 text-muted">City, State</h6>
              <p class="card-text">This is where specific features of the brewery goes.</p>
              <a href="#" class="card-link">View Website</a>
            </div>
          </div>

        </div>
    </div>
  )
}

export default AllBreweries;