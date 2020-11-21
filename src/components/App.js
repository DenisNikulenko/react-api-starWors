import React, { Component } from 'react';
import SwapiService from "../services/swapi-service"

import AppHeader from "./app-header";
import ItemList from './item-list';
import PersoneDetails from './person-details';
import RandomPlanet from "./random-planet";

import './App.scss';

export class App extends Component {
    
    swapiService = new SwapiService();
    
    state = {
        showRandomPlanet: true,
        selectPerson: 5
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            };
        });
    };

    onPersonSelected = id => {
        this.setState({
            selectPerson: id
        })
    }

    render(){

        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        return (
            <div>
                <AppHeader />
                { planet }

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}
                >Toggle Random Planet</button>
        
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersoneDetails personId={this.state.selectPerson} />
                    </div>
              </div>
            </div>
        );
  }
}

export default App;
