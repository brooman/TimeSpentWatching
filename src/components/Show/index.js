import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledListItem = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  margin-bottom: 20px;
  cursor: pointer;
`

const Image = Styled.img`
  width: 5rem;
`

const Text = Styled.p`
  font-size: 2rem;
  color: yellow;
  text-wrap: wrap;
  text-align: right;
  max-width: 70%;
`
const Show = props => {
  return (
    <StyledListItem >
      <Image 
        onClick={props.handleClick}
        data-id={props.showid}
        src={props.image}
        alt={props.name} 
      />
      <Text>{props.name}</Text>
    </StyledListItem>
  );
};

Show.propTypes = {
  name: PropTypes.string
};

export default Show;