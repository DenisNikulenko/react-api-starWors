import React, { Component } from 'react';
import SwapiService from "../services/swapi-service";

import AppHeader from "./app-header";
import RandomPlanet from "./random-planet";
import PeoplePage from './people-page';
import ErrorBoundry  from './error-boundry';

import './App.scss';

export class App extends Component {
    
    swapiService = new SwapiService();
    
    state = {
        showRandomPlanet: true,
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            };
        });
    };

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

                <div className="pages">
                    <PeoplePage />
                </div>

            </div>
        );
    } 
}

export default App;
