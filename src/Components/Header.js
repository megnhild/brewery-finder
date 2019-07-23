import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import SearchForm from './SearchForm';

class Header extends Component {
  render () {
    return (
      <Jumbotron className="Header">
        <h1>Beer Me</h1>
        <p>
          This is a simple search app to help you find breweries all over the USA.
        </p>
        <SearchForm />
      </Jumbotron>
    )
  }
}

export default Header;