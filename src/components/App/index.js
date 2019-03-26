import React from 'react'
import Styled from 'styled-components'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import tmdb from '../../api/tmdb'

import Search from '../Search'
import ShowContainer from '../ShowContainer'
import Header from '../Header'

const AppContainer = Styled.div`
  background-image: url(${props => tmdb.image(props.background)});
  background-size: cover;
  background-position: center;
  height: 100vh;
  transition-property: background;
  transition-duration: 300ms;
  transition-timing-function: ease-in;
`

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
`

const FlexContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`

const searchAPI = query => {
  const url = `https://api.themoviedb.org/3/search/tv`;
  const queryString = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  return fetch(url + queryString).then(res => res.json())
}

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 1000);

class App extends React.Component
{
  state = {
    timeSpent: 0, //Timespent in minutes
    searchText: "",
    searchResult: null,
    myShows: null,
    background: '/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg',
  }
  
  handleInput = async (event) => {
    this.setState({
      searchText: event.target.value, 
      searchResult: null
    });

    const result = await searchAPIDebounced(this.state.searchText);

    this.setState({
      searchResult: result,
      background: result.results[0] ? result.results[0].backdrop_path : '/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg'
    });
  }

  render(){
    return (
      <AppContainer id="App" background={this.state.background ? this.state.background : ''}>
        <Container>
          <Header time="13 hours" />
          <Search 
            type="text"
            onChange={this.handleInput}
            value={this.state.searchText}
            placeholder="Start searching for TV Show..."
          />

          <FlexContainer>
            <ShowContainer title="Search Results" shows={this.state.searchResult ? this.state.searchResult.results : []} />
            <ShowContainer title="Selected Shows" shows={this.state.myShows ? this.state.myShows : []} />
          </FlexContainer>

        </Container>
      </AppContainer>
    )
  }

}

export default App;