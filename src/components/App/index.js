import React from 'react'
import styled from 'styled-components'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import Search from '../Search'
import SearchResultContainer from '../SearchResultContainer'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: 0 auto;
  padding-top: 20vh;
`

const searchAPI = query => fetch(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.TMDB_API_KEY}&query=${encodeURIComponent(query)}`);

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 500);

class App extends React.Component
{
  state = {
    data: {},
    searchText: "",
    searchResult: {}
  }

  handleInput = async (event) => {
    this.setState({
      searchText: event.target.value,
      searchResult: null
    });

    const result = await searchAPIDebounced(this.state.searchText);

    this.setState({
      searchResult: result
    });
  }

  render(){
    return (
      <StyledApp id="App">
        <Search 
          onChange={this.handleInput}
          value={this.state.searchText}
          placeholder="Start searching for TV Show..."
        />
        <SearchResultContainer></SearchResultContainer>
      </StyledApp>
    )
  }

}

export default App;