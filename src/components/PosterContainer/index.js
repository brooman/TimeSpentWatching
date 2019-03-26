import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Poster from '../Poster'

const StyledContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PosterContainer = props => {
  return (
    <StyledContainer>
      {props.posters.map(poster => {
        return <Poster posterid={poster.id} image={poster.image} link={poster.link} />
      })}
    </StyledContainer>
  );
};

PosterContainer.propTypes = {
  posters: PropTypes.array
};

export default PosterContainer;