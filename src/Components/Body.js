import React, { Component } from 'react';
import { 
  Container,
  Row,
  Col
 } from 'react-bootstrap';

class Body extends Component {
  render () {
    return (
      <Container>
        {/* resizing columns based on screen size to hold cards with brewery info */}
        <Row>
          <Col xs={12} sm={8} md={6} lg={4}>
          xs=12 sm=8 md=6 lg=4
          </Col>
          <Col xs={12} sm={8} md={6} lg={4}>
          xs=12 sm=8 md=6 lg=4
          </Col>
          <Col xs={12} sm={8} md={6} lg={4}>
          xs=12 sm=8 md=6 lg=4
          </Col>
        </Row>

      </Container>
    )
  }
}

export default Body;