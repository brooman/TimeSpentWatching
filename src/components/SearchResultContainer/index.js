import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components'
import SearchResult from '../SearchResult'

const StyledContainer = Styled.ul`
  list-style: none;
  background-color: #222;
  width: 80%;
  padding: 2rem;
  margin: 0;
  border: 3px solid yellow;
  border-top: none;
`

const SearchResultContainer = props => {
  return (
    <StyledContainer>
      {props.results && props.results.map((item) => {
        return (
          <SearchResult 
            key={item.id}
            image={process.env.REACT_APP_TMDB_IMAGE_PATH + item.poster_path}
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