import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components'
import SearchResult from '../SearchResult'

const StyledContainer = Styled.ul`
  list-style: none;
  background-color: #222;
  width: 50%;
  padding: 2rem;
  margin: 3rem;
  border-top: none;
  max-height: 50vh;
  overflow: scroll;
`

const SearchResultContainer = props => {
  return (
    <StyledContainer>
      {props.results && props.results.map((item) => {
        return (
          <SearchResult 
            key={item.id}
            name={item.name} 
          />
        )
      })}
    </StyledContainer>
  );
};
  
SearchResultContainer.propTypes = {
  results: PropTypes.array
};

export default SearchResultContainer;