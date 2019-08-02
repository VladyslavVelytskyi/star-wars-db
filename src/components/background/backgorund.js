import React, { Component } from 'react';

import './background.css';

export default class Background extends Component {
  state = {
    square: 0,
    stars: []
  };

  countSquare = () => {
    let { width, height } = this.props;

    return width * height;
  };

  getStarsCount(square) {
    return square / 9000;
  }

  getStar( {startX, startY} ) {
    const ctx = this.refs.canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(startX, startY, 50, 0, Math.PI * 2);
    ctx.fillStyle ='rgb(255, 255, 255)';

    ctx.closePath();

    return { startX, startY };
  }


  getStars() {
    let { width, height } = this.props;
    let state = this.state;
    let val = Math.round(this.getStarsCount(this.countSquare()));

    for(let i = 0; i < val; i++) {
      let startX = Math.floor(Math.random() * width);
      let startY = Math.floor(Math.random() * height);
      window.console.log(this.state.stars);
      this.setState(
        {
          ...state,
          stars: [...state.stars, { startX, startY }]
      });
      window.console.log(this.state.stars);
    }
  }

  componentDidMount() {
    this.getStars();
    window.console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let { stars } = prevState;

    for(let i = 0; i < stars.length; i++) {
      this.getStar(stars[i]);
    }
  }

  render() {
    let { width, height } = this.props;

    return (
      <div className='sw-app__sky'>
        <canvas
          ref='canvas'
          width={ width }
          height={ height }>
        </canvas>
      </div>
    )
  }
}