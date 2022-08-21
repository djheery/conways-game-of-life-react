import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Container from './components/Layout/Container';
import GridContextProvider from './store/GridContextProvider';
import Grid from './components/Grid/Grid';
import Button from './components/UI/Button/Button';
import ButtonContainer from './components/UI/Button/ButtonsContainer'
import { useContext } from 'react';
import GridContext from './store/GridContext';

function App() {


  return (
    <Container>
      <Header />
      <GridContextProvider>
        <Grid />
        <ButtonContainer>
          <Button id="start-btn"  buttonName="Start Evolution"/>
          <Button id="stop-btn"  buttonName="Stop Evolution"/>
          <Button id="random-btn"  buttonName="Randomize Board"/>

        </ButtonContainer>
      </GridContextProvider>
    </Container>
  );
}

export default App;
