import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { render } from '@testing-library/react';

class App extends React.Component {
  render(){
    return(
      <div><Navbar/></div>
    )
  }
}

export default App;
