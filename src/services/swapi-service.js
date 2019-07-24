export default class SwapiService {
  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
    }
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  };

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    const res = await this.getAllPlanets(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    const res = await this.getAllPlanets(`/starships/`);
    return res.results;
  }

  getStarships(id) {
    return this.getResource(`/starships/${id}/`);
  }
}
