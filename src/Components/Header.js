import React, { Component } from 'react';
import SearchForm from './SearchForm';

class Header extends Component {
  render () {
    return (

      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Beer Me</h1>
          <p class="lead">This is a simple search app to help you find breweries all over the USA.</p>
          <SearchForm />
        </div>
      </div>

    )
  }
}

export default Header;