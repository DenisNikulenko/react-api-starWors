import React, { Component } from 'react';

import Row from "../row";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import ErrorIndicators from "../error-indicators/";

import "./people-page.scss";

export default class PeoplePage extends Component {
    
    swapiService = new SwapiService();

    state = {
        selectPerson: 3,
        hasError: false
    };

    componentDidCatch(err, info){
        this.setState({ hasError: true })
    }

    onPersonSelected = selectPerson => {
        this.setState({ selectPerson });
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicators />
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected} 
                getData={this.swapiService.getAllPeople} 
                renderItems={({ name, gender })=> `${name} ( ${gender}    )`}/>
        )

        const personDetails = (
            <PersonDetails personId={this.state.selectPerson} />
        )

        return (
            <Row left={itemList} right={personDetails} />
        );
    };
}

