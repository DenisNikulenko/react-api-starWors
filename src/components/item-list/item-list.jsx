import React, { Component } from 'react';

import Spinner from "../spinner/"
import SwapiService from '../../services/swapi-service';

import "./item-list.scss";

export default class ItemList extends Component {
    
    swapiServices = new SwapiService(); 

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiServices.getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }


    renderItems(arr) {
        return arr.map(({id,name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}
                >
                    {name}
                </li>    
            )
        })
    }

    render() {

        const {peopleList} = this.state;
        
        if (!peopleList) {
            return <Spinner />
        };

        const items = this.renderItems(peopleList);
        return (
            <ul className="item-list list-group">
                {items }
                {/* <li className="list-group-item">
                    Luke Skywalker
                </li>
                <li className="list-group-item">
                    Darth Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li> */}
            </ul>
      );
    }
  }