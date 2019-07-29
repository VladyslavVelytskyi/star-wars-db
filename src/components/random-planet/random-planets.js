import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from "../spinner/";

export default class RandomPlanets extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet(), 7000);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet() {
    const id = Math.floor(Math.random() * 20);
    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded);
  }

  render() {

    const { planet:
        { id,
          name,
          population,
          rotationPeriod,
          diameter
        }, loading
    } = this.state;

    return (
        <div className='random-planet'>
          {!loading &&
          <div>
          <img src={ `https://starwars-visualguide.com/assets/img/planets/${id}.jpg` }
               alt={ name }/>
          <div>
            <h3>{name}</h3>
            <ul>
              <li>Population: { population }</li>
              <li>Rotation period: { rotationPeriod }</li>
              <li>Diameter: { diameter }</li>
            </ul>
          </div>
          </div>}
          {loading &&
          <Spinner/>}
        </div>
        )
  }
}
