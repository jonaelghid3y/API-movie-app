import React from 'react'
import styled from "styled-components";

const StyledFormDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  `
const StyledForm = styled.form`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: rgb(28, 30, 36);
  width: 98%;
  margin: 5px;
  padding: 5px;
  
`
const StyledInput = styled.input`

  height: 40px;
  width: 400px;
  font-size: 15px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: grey;
  color: antiquewhite;
  
`;

const StyledSelect = styled.select`

  height: 45px;
  border-radius: 0;
  font-size: 15px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background-color: #6f6f6f;
  width: auto;
  float: left;
  max-width: 100%;
  border-radius: 2px;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
   
     }
    select:after {
    content: " ";
    top: 50%;
    margin-top: -2px;
    right: 8px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #aaa;
`

function Form({value, onChange, handleType}) {

  return (

    <StyledFormDiv>

      <StyledForm>

        <StyledInput onChange={onChange} value={value} type="text" ></StyledInput>

        <StyledSelect onChange={handleType}>
          <option value="">All</option>
          <option value="Movie">Movies</option>
          <option value="Series">Series</option>
          <option value="Game">Games</option>
        </StyledSelect>

      </StyledForm>

    </StyledFormDiv>

  )
}

export default Form