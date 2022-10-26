//import logo from './logo.svg';
import './App.css';
import Welcome from './components/greeting';
import Label from './components/Labels';
import { Component } from 'react';

class App extends Component{
  render(){
    return (
      <div className='App'>
        <Welcome/>
        <Label/>
        
        
      </div>
    )
  }
}

export default App;
