import React, { Component } from 'react';
import SwapiService from "../services/swapi-service"

import AppHeader from "./app-header";
import ItemList from './item-list';
import PersonDetails from './person-details';
import RandomPlanet from "./random-planet";
import PeoplePage from './people-page'
import ErrorIndicators  from './error-indicators'

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

        if (this.state.hasError) {
            return <ErrorIndicators />
        }
        
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

                    {/* <div className="row mb2 page-planet">
                        <div className="col-md-6">
                            <ItemList 
                                onItemSelected={this.onPersonSelected} 
                                getData={this.swapiService.getAllPlanets}
                                renderItems={item=> item.name}/>
                        </div>
                        <div className="col-md-6">
                            <PersonDetails personId={this.state.selectPerson} />
                        </div>
                    </div>
                    
                    <div className="row mb2 page-starship">
                        <div className="col-md-6">
                            <ItemList 
                                onItemSelected={this.onPersonSelected} 
                                getData={this.swapiService.getAllStarships} 
                                renderItems={item=> item.name}/>
                        </div>
                        <div className="col-md-6">
                            <PersonDetails personId={this.state.selectPerson} />
                        </div>
                    </div> */}
                </div>

            </div>
        );
    } 
}

export default App;
