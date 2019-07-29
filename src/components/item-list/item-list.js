import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: []
  };

  componentDidMount() {
    this.swapiService.getAllPeople()
        .then((peopleList) => this.setState({
          peopleList
        }));
  }

  render() {
    const { peopleList } = this.state;

    return (
        <div>
          <ul>
            { peopleList.map((item) =>
              <li key={item.id}>{item.name}</li>
            ) }
          </ul>
        </div>
    )}
}