import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledListItem = Styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;

`
const Image = Styled.img`
  object-fit: contain;
  width: 5rem;
`

const Text = Styled.p`
  margin-left: 2rem;
  font-size: 2rem;
  color: yellow;
`

const SearchResult = props => {
  return (
    <StyledListItem key={props.key}>
      <Image src={props.image} alt={props.name}/>
      <Text>{props.name}</Text>
    </StyledListItem>
  );
};

SearchResult.propTypes = {
  name: PropTypes.string
};

export default SearchResult;