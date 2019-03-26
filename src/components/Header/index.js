import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import CountUp from 'react-countup'

const H1 = styled.h1`
  border: none;
  border-radius: 16px;
  background-color: #222;
  width: 100%;
  font-size: 2.5rem;
  padding: 0.5rem 1rem;
  color: white;
  text-align: center;
`

const Header = props => {
  return (
    <H1 >
      Total: <CountUp end={props.time / 60} /> hours
    </H1>
  );
};

Header.propTypes = {
  time: PropTypes.number
};

export default Header;