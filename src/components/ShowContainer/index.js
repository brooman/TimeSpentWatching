import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components'
import Show from '../Show'
import tmdb from '../../api/tmdb'

const H2 = Styled.h2`
  text-align: center;
  font-size: 2rem;
`

const StyledContainer = Styled.ul`
  color: yellow;
  list-style: none;

  background-color: #222;

  border-radius: 16px;
  border-top: none;

  width: 100%;

  padding: 0.5rem 2rem;
  margin: 1rem;
`

const ScrollContainer = Styled.div`
  overflow: scroll;
  max-height: 50vh;
`

const ShowContainer = props => {
  return (
    <StyledContainer>
      <H2>{props.title}</H2>
      <ScrollContainer>
        {props.shows && props.shows.map((item) => {
          return (
            <Show 
              key={item.id}
              image={item.poster_path ? tmdb.image(item.poster_path) : 'poster_not_found.png'}
              name={item.name} 
            />
          )
        })}
      </ScrollContainer>
    </StyledContainer>
  );
};
  
ShowContainer.propTypes = {
  shows: PropTypes.array
};

export default ShowContainer;