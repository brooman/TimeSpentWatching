import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledPoster = Styled.a`
  display: relative;
  margin: 0 10px;
`

const Poster = props => {
  return (
    <StyledPoster 
      data-id={props.posterid}
      href={props.link}
    >
      <img src={props.image} alt=""/>
    </StyledPoster>
  );
};

Poster.propTypes = {
  posterid: PropTypes.number,
  image: PropTypes.string,
  link: PropTypes.string,
};

export default Poster;