import '@fontsource/roboto/300.css';
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Movieapi from './Movieapi'
import styled from "styled-components"

const StyledMainContainer = styled.div`
      
background-color: rgb(28, 30, 36);
min-height: 600px;
border: 1px solid black;
`

function App() {

  return (

    <StyledMainContainer>

      <Header />
      <Movieapi />
      <Footer />

    </StyledMainContainer>

  )
}

export default App
