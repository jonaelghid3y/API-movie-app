import React from 'react'
import styled from "styled-components";


const StyledHeaderDiv = styled.div`
  
  border: 1px solid black;
  text-align: center;
  background-image: url(../src/img/photo-1626814026160-2237a95fc5a0.avif);
  color: #faebd7;
  background-size: auto;
  height: 250px;
  min-width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`
const StyledHeaderTxt = styled.h1`

  background-color: rgba(81, 88, 96, 0.75);;  
  border-radius: 15px;
  height: 80px;
`

function Header() {
  return (

    <StyledHeaderDiv>

      <StyledHeaderTxt> Movielist<img id="headerimg" src='../src/img/211745_film_icon.png'/></StyledHeaderTxt>

    </StyledHeaderDiv>

  )
}

export default Header