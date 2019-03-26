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

const searchAPI = query => {
  const url = `https://api.themoviedb.org/3/search/tv`;
  const queryString = `?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  return fetch(url + queryString).then(res => res.json())
};

const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 1000);

class App extends React.Component
{
  state = {
    data: {},
    searchText: "",
    searchResult: null
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
          type="text"
          onChange={this.handleInput}
          value={this.state.searchText}
          placeholder="Start searching for TV Show..."
        />
        {this.state.searchResult && <SearchResultContainer results={this.state.searchResult.results}></SearchResultContainer>}
      </StyledApp>
    )
  }

}

export default App;