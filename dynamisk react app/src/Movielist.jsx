import React from 'react'
import Movies from './Movies'
import styled from "styled-components"

const StyledMovielistDiv = styled.div`

width: 100%;
display: flex;
`
function Movielist({ movies }) {
  return (
    <StyledMovielistDiv>

      <ul id="movielist">

        <Movies movies={movies} />

      </ul>

    </StyledMovielistDiv>

  )
}

export default Movielist