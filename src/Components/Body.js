import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col
 } from 'react-bootstrap';
import BreweryCard from './BreweryCard';

class Body extends Component {
  render () {
    return (
      <Container>
        {/* resizing columns based on screen size to hold cards with brewery info */}
        <Row>
          <BreweryCard />
        </Row>

      </Container>
    )
  }
}

export default Body;