import React, { Component } from 'react';

import Row from "../row";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";

import "./people-page.scss";


export default class PeoplePage extends Component {
    
    swapiService = new SwapiService();

    state = {
        selectPerson: 3,
    };

    onPersonSelected = selectPerson => {
        this.setState({ selectPerson });
    };

    render() {

        const { getAllPerson, getPerson,  } = this.swapiService;

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected} 
                getData={getAllPerson} 
                renderItems={({ name, gender })=> `${name} ( ${gender} )`} />
        );

        const personDetails = (
            <ItemDetails 
                itemId={this.state.selectPerson} 
                getData={getPerson} />
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    };
}

