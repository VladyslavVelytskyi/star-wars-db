import React, { Component } from 'react';

import './app.css'

import Header from '../header';

export default class App extends Component {

  render() {

    return (
        <div className="mx-auto mt-3">
          <Header />
        </div>
    )
  }
}