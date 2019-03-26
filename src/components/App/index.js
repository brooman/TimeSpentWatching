import React from 'react'
import Styled from 'styled-components'
import AwesomeDebouncePromise from 'awesome-debounce-promise'
import tmdb from '../../api/tmdb'

import Search from '../Search'
import ShowContainer from '../ShowContainer'
import Header from '../Header'

const AppContainer = Styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;

  background-image: url(${props => tmdb.image(props.background)});
  background-size: cover;
  background-position: center;
  transition-property: background;
  transition-duration: 300ms;
  transition-timing-function: ease-in;
`

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`

const FlexContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
`

const searchAPIDebounced = AwesomeDebouncePromise(tmdb.searchByName, 500);

class App extends React.Component
{
  state = {
    timeSpent: 0, //Timespent in minutes
    searchText: "",
    searchResult: null,
    myShows: [],
    background: '/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg',
  }
  
  handleSearch = async (event) => {
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

  handleSave = async (event) => {
    const filteredArray = this.state.myShows.filter(item => {
      return item.id !== parseInt(event.target.dataset.id)
    })

    if(filteredArray.length < this.state.myShows.length)
    {
      this.setState({
        myShows: filteredArray,
      })
    } else {
      const result = await tmdb.getShowById(event.target.dataset.id);
      
      this.setState({
        myShows: [...this.state.myShows, result]
      }) 
    }
  }

  render(){
    return (
      <AppContainer id="App" background={this.state.background ? this.state.background : ''}>
        <Container>
          <Header time={tmdb.calculateTotalRunTime(this.state.myShows)} />
          <Search 
            type="text"
            onChange={this.handleSearch}
            value={this.state.searchText}
            placeholder="Search tv shows"
          />

          <FlexContainer>
            <ShowContainer
              title="Search Results"
              handleClick={ this.handleSave }
              shows={this.state.searchResult ? this.state.searchResult.results : []}
            />
            <ShowContainer 
              title="Selected Shows"
              handleClick={ this.handleSave }
              shows={this.state.myShows}
            />
          </FlexContainer>

        </Container>
      </AppContainer>
    )
  }

}

export default App;