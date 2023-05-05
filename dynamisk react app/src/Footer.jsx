import React from 'react'
import styled from "styled-components";

const StyledFooterdiv = styled.div`

border-top: 2px solid grey;
height: 150px;
color: yellow;
text-align: center;
`
function Footer() {
  return (
    
    <StyledFooterdiv>
      <p>copyright@hej hej</p>
      <p>phone: 09e0910e</p>
      <p>mail: daodad@hotmail.nej</p>
    </StyledFooterdiv>
  )
}

export default Footer