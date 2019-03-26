import React from 'react'
import styled from 'styled-components'
import Search from '../Search'

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-top: 20vh;
`

class App extends React.Component
{
  state = {
    data: {},
    searchText: ""
  }

  handleInput(event){
    this.setState({searchText: event.target.value});
  }

  render(){
    return (
      <StyledApp id="App">
        <Search 
          onChange={this.handleInput}
          value={this.state.searchText}
          placeholder="Start searching for TV Show..."
        />
      </StyledApp>
    )
  }

}

export default App;