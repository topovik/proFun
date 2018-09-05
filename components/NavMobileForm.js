import React, { Component } from 'react'
import SearchMobileForm from '../components/SearchMobileForm'
import Link from 'next/link'
import css from "../style.css"

class NavMobileForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hideMenu: +1
        }
    }
    render() {

        let mobileMenu;
        this.props.displayMenu % 2 === 0
            ? mobileMenu = <nav className={css.NavMobileForm} style={{transform: "translateX(-100%)", position: "fixed"}}>
            <SearchMobileForm onClickHideMenu={this.props.onClickHideMenu}/>
            <Link prefetch href={{ pathname: '/'}}>
                <img className={css.LogoMobileMenu} src="/static/weather/proFun_Logo.png" alt="logo"/>
            </Link>
            <div className={css.NavigationMobile} onClick={() => {this.props.onClickHideMenu(this.state.hideMenu)}}>
                <Link prefetch href={{ pathname: '/' }}>
                    <h2><i className="fa fa-home fa-sm" aria-hidden="true"></i></h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'auto' } }}>
                    <h2 style={this.props.backNavigation === "auto" ? {background: "rgb(206, 0, 0)"} : {}}>Auto</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'finance' } }}>
                    <h2 style={this.props.backNavigation === "finance" ? {background: "rgb(135, 184, 0)"} : {}}>Finance</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'sport' } }}>
                    <h2 style={this.props.backNavigation === "sport" ? {background: "rgb(185, 121, 0)"} : {}}>Sport</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'games' } }}>
                    <h2 style={this.props.backNavigation === "games" ? {background: "rgb(0, 110, 173)"} : {}}>Games</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'it' } }}>
                    <h2 style={this.props.backNavigation === "it" ? {background: "rgb(0, 95, 0)"} : {}}>IT</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'other' } }}>
                    <h2 style={this.props.backNavigation === "other" ? {background: "rgb(184, 133, 163)"} : {}}>Other</h2>
                </Link>
            </div>
        </nav>
            : mobileMenu = <nav className={css.NavMobileForm} style={{transform: "translateX(0)", position: "fixed"}}>
            <SearchMobileForm onClickHideMenu={this.props.onClickHideMenu}/>
            <Link prefetch href={{ pathname: '/'}}>
                <img className={css.LogoMobileMenu} src="/static/weather/proFun_Logo.png" alt="logo"/>
            </Link>
            <div className={css.NavigationMobile} onClick={() => {this.props.onClickHideMenu(this.state.hideMenu)}}>
                <Link prefetch href={{ pathname: '/' }}>
                    <h2><i className="fa fa-home fa-sm" aria-hidden="true"></i></h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'auto' } }}>
                        <h2 style={this.props.backNavigation === "auto" ? {background: "rgb(206, 0, 0)"} : {}}>Auto</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'finance' } }}>
                    <h2 style={this.props.backNavigation === "finance" ? {background: "rgb(135, 184, 0)"} : {}}>Finance</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'sport' } }}>
                    <h2 style={this.props.backNavigation === "sport" ? {background: "rgb(185, 121, 0)"} : {}}>Sport</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'games' } }}>
                    <h2 style={this.props.backNavigation === "games" ? {background: "rgb(0, 110, 173)"} : {}}>Games</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'it' } }}>
                    <h2 style={this.props.backNavigation === "it" ? {background: "rgb(0, 95, 0)"} : {}}>IT</h2>
                </Link>
                <Link prefetch href={{ pathname: '/navigation', query: { text: 'other' } }}>
                    <h2 style={this.props.backNavigation === "other" ? {background: "rgb(184, 133, 163)"} : {}}>Other</h2>
                </Link>
            </div>
        </nav>
        return (
            <React.Fragment>
                {mobileMenu}
            </React.Fragment>
        )
    }

}
export default NavMobileForm