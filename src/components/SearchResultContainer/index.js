import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components'
import SearchResult from '../SearchResult'

const StyledContainer = Styled.ul`
background-color: #222;
width: 80%;
padding: 2rem;
margin: 0;
`

const SearchResultContainer = props => {
  if(!props.results) return <div />

  return (
    <StyledContainer>
      {props.results.map((item) => {
        return <SearchResult name={item.name} />
      })}
    </StyledContainer>
  );
};
  
  SearchResultContainer.propTypes = {
    results: PropTypes.array
  };
  
  export default SearchResultContainer;