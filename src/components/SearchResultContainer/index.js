import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components'
import SearchResult from '../SearchResult'

const StyledContainer = Styled.ul`
  background-color: #222;
  width: 100%;
  padding: 2rem;
`

const SearchResultContainer = props => {
  return (
    <StyledContainer>
      {props.results && props.results.map((item) => {
        return <SearchResult name={item.name} />
      })}
    </StyledContainer>
  );
};

SearchResultContainer.propTypes = {
  results: PropTypes.array
};

export default SearchResultContainer;