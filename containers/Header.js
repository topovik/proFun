import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import Social from '../components/Social'
import Weather from '../components/Weather'
import css from '../style.css'
import Link from 'next/link'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weth: [],
            preload: true
        }
    }

    componentDidMount() {
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

    render() {
        return (
            <React.Fragment>        
                <Link prefetch href={{ pathname: '/'}}>
                   <img className={css.Logo} src="/static/proFun_Logo.png" alt="logo"/>
                </Link>
                <SearchForm className={css.SearchForm} />
                <Social className={css.Social} />
                <Weather weather={this.state.weth} preload={this.state.preload}/>
            </React.Fragment>
        )
    }
}

export default Header