import React, { Component } from 'react';

import './app.css'

import Header from '../header';
import RandomPlanets from "../random-planet";
import ItemList from '../item-list';

export default class App extends Component {

  render() {

    return (
        <div className="mx-auto mt-3 sw-app__container">
          <Header />
          <RandomPlanets/>
          <ItemList/>
        </div>
    )
  }
}