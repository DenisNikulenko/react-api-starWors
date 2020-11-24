import React, { Component } from 'react';
import SwapiService from "../services/swapi-service";

import AppHeader from "./app-header";
import RandomPlanet from "./random-planet";
import PeoplePage from './people-page';
import Row from "./row";
import ItemDetails, { Record }  from "./item-details";
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

        const { getPerson, getPlanet, getPersonImage, getPlanetImage } = this.swapiService;

        const personDetails = (
            <ItemDetails 
                itemId={11} 
                getData={getPerson} 
                getImageUrl={getPersonImage} 
            >
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth Year" />
                <Record field="gender" label="Gender" />
            </ItemDetails>
        )
        const planetDetails = (
            <ItemDetails 
                itemId={13} 
                getData={getPlanet} 
                getImageUrl={getPlanetImage}
            >
                <Record field="population" label="Genpopulationder" />
                <Record field="rotationPeriod" label="Rotation-period" />
                <Record field="diameter" label="Diameter" />
            </ItemDetails>
        )

        return (
            <ErrorBoundry>

                <div className="stardb-app">
                    <AppHeader />
                    {/* { planet } */}
                    {/* <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}
                    >Toggle Random Planet</button> */}
                    {/* <PeoplePage /> */}

                    <Row
                        left={personDetails}
                        right={planetDetails} />
                </div>

            </ErrorBoundry>
        );
    } 
}

export default App;
