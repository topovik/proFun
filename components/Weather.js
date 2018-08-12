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
                    <p className="fa fa-map-marker" aria-hidden="true">
                        {this.props.weather.town}
                    </p>
                    <img src={imagesPath} alt="weather"/>
                    <span>{this.props.weather.temp|0}</span>
                    <span>°C</span>
                </div>
            :   <div className={css.Weather}>
                    <p className="fa fa-map-marker" aria-hidden="true">
                        <span>{this.props.weather.town}</span>
                    </p>
                    <img src={imagesPath} alt="weather"/>
                    <span className={css.WeatherTemp}>{this.props.weather.temp|0}
                        <span className={css.WeatherC}>°C</span>
                    </span>
                    
                </div>
        )
    }
}

export default Weather