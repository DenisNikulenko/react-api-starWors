import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";

import "./random-planet.scss";

export default class RandomPlanet extends Component {

    constructor(props) {
        super(props);
        this.updatePlanet();
    }

    state = {
        planet: {}
    };


    swapiService = new SwapiService();
  
    onPlanetLoaded = planet => {
        this.setState({planet});
    }
   
    updatePlanet() {
        const id = Math.floor(Math.random() * 23 + 2);
        this.swapiService.getPlanet(id)
            .then(planet => this.onPlanetLoaded(planet));
    }
  
    render() {
        console.log(this.state)
        const { planet: {id, name, population, rotationPeriod, diameter} } = this.state;
  
        return (
            <div className="random-planet jumbotron rounded">
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
            </div>
        );
    }
}