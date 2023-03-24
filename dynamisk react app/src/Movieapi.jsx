import React, { useState, useEffect } from 'react';
import Form from './Form';
import Movielist from './Movielist';
import styled from "styled-components";

const StyledErrorText = styled.h2`

  margin-left: 600px;
  margin-top: 50px;
  color: rgb(219, 10, 10);
  width: 250px;
  height: 60px;
  text-align: center;

`
const StyledContainer = styled.div`
    min-height: 700px; 
   

`
function Movieapi() {

  const [search, setSearch] = useState('batman');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [type, setType] = useState('');


  const fetchPost = async () => {

    try {

      const response = await fetch('https://www.omdbapi.com/?apikey=40411cbf&s=' + search + '&type=' + type)
      const movies = await response.json();

      if (movies.Response == 'True') {
        setMovies(movies.Search)
        setError('');
      }

      else {
        setMovies([]);
        setError(movies.Error)
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchPost();

  }, [search, type])

  function handleType(e) {

    setType(e.target.value)
    fetchPost();

  }

  function handleChange(e) {
    e.preventDefault()
    setSearch(e.target.value);
    fetchPost();

  }

  return (
    <StyledContainer>

      <Form value={search} onChange={handleChange} handleType={handleType} />
      <StyledErrorText>{error}</StyledErrorText>
      <Movielist movies={movies} />

    </StyledContainer>
  );
}

export default Movieapi;