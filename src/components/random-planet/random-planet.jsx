import React, { Component } from 'react';

import Spinner from '../spinner/';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import "./random-planet.scss";

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 15000);
    }
      
    componentWillUnmount() {
        clearInterval(this.interval);
    }
  
    onPlanetLoaded = planet => {
        this.setState({
            planet,
            loading: false
        });
    }
   
    onError = err  => {
        this.setState(({ 
            loading: false,
            error: true,
        }))
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 17 + 2);
        this.swapiService.getPlanet(id)
            .then(planet => this.onPlanetLoaded(planet))
            .catch(this.onError);
    }
  
    render() {
        const { planet, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorBoundry /> : null;
        const spinner = loading  ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        console.log("render");
        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {
    const { id = 3, name, population, rotationPeriod, diameter } = planet;
    console.log(id);
    return (
        <React.Fragment>
            <img className="planet-image"
                    src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt ="zxc" />
                    
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}