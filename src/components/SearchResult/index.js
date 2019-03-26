import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledListItem = Styled.li`
  text-decoration: none;
  color: yellow;
`

const SearchResult = props => {
  return (
    <StyledListItem>
      {props.name}
    </StyledListItem>
  );
};

SearchResult.propTypes = {
  name: PropTypes.string
};

export default SearchResult;