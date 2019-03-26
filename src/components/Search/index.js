import React from 'react';
import styled from 'styled-components'

const StyledSearch = styled.input`

`

class Search extends React.Component {
  render() {
    return (
      <StyledSearch type="text"/>
    );
  }
}

export default Search;