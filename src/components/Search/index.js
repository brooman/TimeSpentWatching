import React from 'react';
import styled from 'styled-components'

const StyledSearch = styled.input`
  border: 3px solid yellow;
  border-radius: 16px;
  background-color: transparent;
  width: 60rem;
  height: 4rem;
  font-size: 2.5rem;
  padding: 0.5rem 1rem;
  color: #fff;

  &:focus {
    outline: 0;
  }
`

class Search extends React.Component {
  render() {
    return (
      <StyledSearch 
        type="text"
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default Search;