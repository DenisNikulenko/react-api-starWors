import React, { Component } from 'react';
import SwapiService from "../settings/swapiService"
import './App.scss';

export class App extends Component {
    swapiService = new SwapiService();
    state = {}


    render(){
        return (
            <div className="App">
                <button onClick={this.getPeople}>click</button>
                <h1> {this.state.data.name} </h1>
            </div>
    );
  }
}

export default App;
