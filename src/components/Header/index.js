import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const H1 = styled.h1`
  border: none;
  border-radius: 16px;
  background-color: #222;
  width: 100%;
  font-size: 2.5rem;
  padding: 0.5rem 1rem;
  color: white;
  opacity: ${props => props.show ? 1 : 0};
  text-align: center;
`

const Header = props => {
  return (
    <H1 show={true}>
      Total: {props.time}
    </H1>
  );
};

Header.propTypes = {
  time: PropTypes.number,
  show: PropTypes.bool
};

export default Header;