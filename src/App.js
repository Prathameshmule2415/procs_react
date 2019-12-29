import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Parent />
    </div>
  );
}

class Parent extends React.Component {
  render(){
    return(
      <div>
          <h2> Just some info</h2>
          <Cars msg="Cars are cool" model="Mh 47 J 4151" coolsCars={this.props.cars}/>
      </div>
    );
  }
}

Parent.defaultProps=
{
  cars:['BMW','LamborGini','Avanti']
}
class Cars extends React.Component {
  render(){
    return(
      <div>
        <h3> I am From Cars Component</h3>
        <p> {this.props.msg}</p>
        <p>{this.props.model}</p>
        <p>{this.props.coolsCars.map((items,i) =>{

          return " "+ items;
        })}</p>


      </div>
    );
  }
}

export default App;
