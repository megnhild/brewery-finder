import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import SearchForm from './SearchForm';

class Header extends Component {
  render () {
    return (
      <Jumbotron>
        <h1>Brewery Near You</h1>
        <p>
          This is a simple search app to help you find a breweries all over the USA.
        </p>
        <SearchForm />
      </Jumbotron>
    )
  }
}

export default Header;