import React, { Component } from 'react';

import './app.css'

import Header from '../header';
import RandomPlanets from "../random-planet";
import ItemList from '../item-list';
import Background from "../background/backgorund";

export default class App extends Component {
  state = {
    windowHeight: document.documentElement.clientHeight,
    windowWidth: document.documentElement.clientWidth
  };


  render() {
    let { windowHeight, windowWidth } = this.state;

    return (
        <div>
          <div className="mx-auto mt-3 sw-app__container">
            <Header />
            <RandomPlanets />
            <ItemList />
          </div>
          <Background
            width={ windowWidth }
            height={ windowHeight }/>
        </div>
    )
  }
}