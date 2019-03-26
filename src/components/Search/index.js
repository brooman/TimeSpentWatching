import styled from 'styled-components'

const Search = styled.input`
  border: none;
  border-radius: 16px;
  background-color: #222;
  width: 100%;
  height: 4rem;
  font-size: 2.5rem;
  padding: 0.5rem 1rem;
  color: white;

  &:focus {
    outline: 0;
  }
`

export default Search;