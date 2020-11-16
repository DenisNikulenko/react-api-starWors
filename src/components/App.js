import React, { Component } from 'react';
import SwapiService from "../services/swapi-service"

import AppHeader from "./app-header";
import ItemList from './item-list';
import PersoneDetails from './person-details';
import RandomPlanet from "./random-planet";

import './App.scss';

export class App extends Component {
    swapiService = new SwapiService();
    state = {}

    render(){
        return (
            <div>
              <AppHeader />
              <RandomPlanet />
        
              <div className="row mb2">
                <div className="col-md-6">
                  <ItemList />
                </div>
                <div className="col-md-6">
                  <PersoneDetails />
                </div>
              </div>
            </div>
          );
  }
}

export default App;
