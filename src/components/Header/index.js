import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 4rem;
  color: white;
  opacity: ${props => props.show ? 1 : 0};
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0,0,0,1);
`

const Header = props => {
  return (
    <H1 show={props.show}>
      You have spent {props.time} watching TV-Shows 👀
    </H1>
  );
};

Header.propTypes = {
  time: PropTypes.number,
  show: PropTypes.bool
};

export default Header;