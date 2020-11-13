import { Component } from 'react'


export default class SwapiService extends Component {
    _apiBase = "https://swapi.dev/api/";

    getResource = async url => {
        const result = await fetch(`${this._apiBase}${url}`);

        if(!result.ok) {
            throw new Error(`Could not fetch ${url}, recived ${result.status}`);
        };

        return await result.json();
    }

    getAllPersons = async () => {
        const res = await this.getResource("/peoples/");
        return res.results;
    }

    getPerson = async id => {
        return await this.getResource(`/people/${id}`);
    }

    getAllPlanets = async () => {
        const res = await this.getResource("/planets/");
        return res.results;
    }

    getPlanet = async id => {
        return await this.getResource(`/planets/${id}`);
    }

    getAllStarships = async () => {
        const res = await this.getResource("/starships/");
        return res.results;
    }

    getStarship = async id => {
        return this.getResource(`/starship/${id}`);
    }
}


