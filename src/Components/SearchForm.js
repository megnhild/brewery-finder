import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

class SearchForm extends Component {
  render () {
    return (
      <Form inline>
        <FormGroup controlId="formInlineSearchInput">
          <FormControl type="search" placeholder="enter something..." />
        </FormGroup>
        {' '}
        <Button type="submit">
          search
        </Button>
      </Form>
    )
  }
}

export default SearchForm;