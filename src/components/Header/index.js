import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 5rem;
  color: white;
`

const Header = props => {
  return (
    <H1>
      You have spent {props.time} watching TV-Shows 👀
    </H1>
  );
};

Header.propTypes = {
  time: PropTypes.number
};

export default Header;