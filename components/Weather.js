import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import css from '../style.css'

class Weather extends Component {
    render() {
            let imagesPath;
            this.props.weather.icon !== undefined 
            ? imagesPath = `/static/weather/${this.props.weather.icon}.png`
            : imagesPath = null;

        return (
            this.props.preload 
            ?   <div style={{opacity: 0}}>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.weather.town}</p>
                    <img src={imagesPath} alt="weather"/>
                    <span>{this.props.weather.temp|0} °C</span>
                    <div className={css.transition}></div>
                </div>
            :   <div className={css.Weather}>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>{this.props.weather.town}</p>
                    <img src={imagesPath} alt="weather"/>
                    <span>{this.props.weather.temp|0} °C</span>
                    <div className={css.transition}></div>
                </div>
        )
    }
}

export default Weather