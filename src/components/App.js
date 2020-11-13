import React, { Component } from 'react';
import SwapiService from "../services/swapi-service"

import AppHeader from "./app-header";
import ItemList from './item-list';
import PersoneDetails from './person-details';
import RandomPlanet from "./random-planet";
import PlanetDetails from './planet-details';
import StarshipDetails from './starship-details';

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
