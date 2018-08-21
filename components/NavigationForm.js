import React, { Component } from 'react'
import SearchFormNavigation from '../components/SearchFormNavigation'
import Link from 'next/link'
import css from "../style.css"

class NavigationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 2
        }
    }

    render() {
        let searchDisplay;
        this.state.display % 2 === 0
            ? searchDisplay = <div className={css.NavigationSearchForm} style={{ display: "none" }}><SearchFormNavigation /></div>
            : searchDisplay = <div className={css.NavigationSearchForm} style={{ display: "inline-block" }}><SearchFormNavigation /></div>

        let searchBack;
        this.state.display % 2 === 0
            ? searchBack = <div className={css.NavigationSearchIcon} onClick={this.onClick = this.onClick.bind(this)}><i className="fa fa-search fa-lg" aria-hidden="true"></i></div>
            : searchBack = <div className={css.NavigationSearchIcon} style={{ background: "#333" }} onClick={this.onClick = this.onClick.bind(this)}><i className="fa fa-search fa-lg" aria-hidden="true"></i></div>

        let logoDisplay;
        this.props.logoScroll === false
            ? logoDisplay = <Link prefetch href={{ pathname: '/' }}><img style={{ opacity: '0', zIndex: '-100'}} src="/static/proFun_Logo.png" alt="logo" /></Link>
            : logoDisplay = <Link prefetch href={{ pathname: '/' }}><img style={{ opacity: '1' }} src="/static/proFun_Logo.png" alt="logo" /></Link>
        return (
            <div className={css.NavigationSectionContainer}>
                <div className={css.NavigationForm}>
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
                <div className={css.LogoNavigation}>
                    {logoDisplay}
                </div>
                <div className={css.FollowContainer}>
                    <div className={css.NavigationFollow}>
                        <i className="fa fa-plus" aria-hidden="true">
                            <span>FOLLOW</span>
                        </i>
                    </div>
                    <div className={css.SocialIconsNavigation}>
                        <ul>
                            <a href="#" target="_blank">
                                <li className={css.youtubeNavigation}>
                                    <i className="fa fa-youtube fa-sm">
                                        <span>YouTube</span>
                                    </i>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className={css.twitterNavigation}>
                                    <i className="fa fa-twitter fa-sm">
                                        <span>Twitter</span>
                                    </i>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className={css.instagramNavigation}>
                                    <i className="fa fa-instagram fa-sm">
                                        <span>Instagram</span>
                                    </i>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className={css.facebookNavigation}>
                                    <i className="fa fa-facebook fa-sm">
                                        <span>Facebook</span>
                                    </i>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className={css.vkNavigation}>
                                    <i className="fa fa-vk fa-sm">
                                        <span>VK</span>
                                    </i>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className={css.pinterestNavigation}>
                                    <i className="fa fa-pinterest fa-sm">
                                        <span>Pinterest</span>
                                    </i>
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div className={css.NavigationSearch}>
                    {searchBack}
                    {searchDisplay}
                </div>
            </div>
        )
    }

    onClick() {
        this.setState({ display: ++this.state.display })
    }

}

export default NavigationForm