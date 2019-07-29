import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {

  state = {
    navItems: [
      {name: 'person', title: 'Person'},
      {name: 'planet', title: 'Planet'},
      {name: 'starship', title: 'Starship'}
    ]
  };

  render() {
    const { navItems } = this.state;

    return (
        <header className='sw-header d-flex'>
          <h1 className='sw-header__title'>Star Wars DB</h1>
          <nav className='ml-5 pt-2'>
            <ul className='sw-header__list d-flex m-0 p-0'>
              { navItems.map(item =>
                <li className='sw-header__item mr-4'
                    key={item.name}
                >
                  {item.title}</li>
              )}
            </ul>
          </nav>
        </header>
    )
  }
}
