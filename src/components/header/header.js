import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {


  render() {

    return (
        <header className='sw-header d-flex'>
          <h1 className='sw-header__title'>Star Wars DB</h1>
          <ul className='sw-header__list d-flex'>
            <li>Person</li>
            <li>Planet</li>
            <li>Starship</li>
          </ul>
        </header>
    )
  }
}