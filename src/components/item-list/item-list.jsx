import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import "./item-list.scss";

export default class ItemList extends Component {
    
    swapiServices = new SwapiService(); 

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiServices.getAllPersons()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    render() {

        const {peopleList} = this.state;
        
        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    Luke Skywalker
                </li>
                <li className="list-group-item">
                    Darth Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
            </ul>
      );
    }
  }