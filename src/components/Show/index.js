import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledListItem = Styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
`

const Image = Styled.img`
  width: 5rem;
`

const Text = Styled.p`
  margin-left: 2rem;
  font-size: 2rem;
  color: yellow;
  text-wrap: wrap;
`

const Show = props => {
  return (
    <StyledListItem>
      <Image src={props.image} alt={props.name} />
      <Text>{props.name}</Text>
    </StyledListItem>
  );
};

Show.propTypes = {
  name: PropTypes.string
};

export default Show;