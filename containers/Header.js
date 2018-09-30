import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import Social from '../components/Social'
import Weather from '../components/Weather'
import NavMobileForm from '../components/NavMobileForm'
import css from '../style.css'
import Link from 'next/link'

import Meta from '../components/meta'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weth: [],
            preload: true
        }
    }

    componentDidMount() {
        if(window.screen.width >= 1185) {
            window.navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                
                    fetch(`http://localhost:3000/api/${lat}/${lon}/weather`)
                    .then(response => response.json())
                    .then(item => {
                        this.setState({weth: item, preload: false})
                    })    
            })
        }
    }

    render() {
        return (
            <React.Fragment>  
                <Meta />    
                <Link prefetch href={{ pathname: '/'}}>
                   <img className={css.Logo} src="/static/weather/proFun_Logo.png" alt="logo"/>
                </Link>
                <SearchForm className={css.SearchForm} />
                <Weather weather={this.state.weth} preload={this.state.preload}/>
            </React.Fragment>
        )
    }

}

export default Header