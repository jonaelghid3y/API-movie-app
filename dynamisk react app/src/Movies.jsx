import React from 'react'
import styled from "styled-components"

const StyledMoviesDiv = styled.div`

margin-top: -50px ;
width: 100%;
text-align: center;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const StyledMovieLista = styled.div`

border: 1px solid black;
 margin: 40px;
 width: 300px;
 height: 400px;
 color:  rgb(28, 30, 36);
 display: flex;
 align-items: end;
 border-radius: 5px;  
 padding: 0;
 margin: 20px;

`
const StyledMovieBanner = styled.div`

background-color: rgba(215, 215, 215, 0.75);
height: 30px;
width: 300px;
font-size: 15px;
padding: 0px;
margin: 0;
flex-direction: column;

`
const StyledTomLista = styled.h1`
text-align: center;
margin-left: 510px;
color: whitesmoke;
`

function Movies({ movies }) {
  return (

    <StyledMoviesDiv>

      {
        movies.length
          ? movies.map((movie) => <StyledMovieLista style={{ backgroundImage: `url(${movie.Poster})` }} className="filmlista"
            key={movie.imdbID}>

            <StyledMovieBanner className='movieBanner'>
              <h2> {movie.Title}</h2>
              <p className='filmbannerinfo'> Relase Date: {movie.Year} </p>
              <p className='filmbannerinfo'> Category: {movie.Type} </p>
            </StyledMovieBanner>

          </StyledMovieLista>
          )
          : <StyledTomLista>Listan är tom!</StyledTomLista>
      }

    </StyledMoviesDiv>

  )
}

export default Movies