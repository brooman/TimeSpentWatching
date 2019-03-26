import React from 'react'
import Styled from 'styled-components'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import tmdb from '../../api/tmdb'

import Search from '../Search'
import SearchResultContainer from '../SearchResultContainer'
import Header from '../Header'

const AppContainer = Styled.div`
  background-image: ${props => props.background ? tmdb.image(props.background) : tmdb.image('/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg')};
`
const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
  padding-top: 20vh;
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
    myShows: null
  }
  
  handleInput = async (event) => {
    this.setState({
      searchText: event.target.value, 
      searchResult: null
    });

    const result = await searchAPIDebounced(this.state.searchText);

    this.setState({
      searchResult: result,
      //background: result.results    
    });
  }

  render(){
    return (
      <AppContainer id="App" background={this.state.background ? this.state.background : ''}>
        <Container>
          {this.state.myShows && <Header time="13 hours" />}

          <Search 
            type="text"
            onChange={this.handleInput}
            value={this.state.searchText}
            placeholder="Start searching for TV Show..."
          />

          {this.state.searchResult && <SearchResultContainer results={this.state.searchResult.results} />}
        </Container>
      </AppContainer>
    )
  }

}

export default App;