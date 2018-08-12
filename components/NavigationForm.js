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
        ? searchDisplay = <div className={css.NavigationSearchForm} style={{display: "none"}}><SearchFormNavigation/></div>
        : searchDisplay = <div className={css.NavigationSearchForm} style={{display: "inline-block"}}><SearchFormNavigation/></div>
        return (
            <div className={css.NavigationSection}>
                <div className={css.NavigationForm}>
                    <Link prefetch href={{ pathname: '/' }}>
                        <h2><i className="fa fa-home fa-sm" aria-hidden="true"></i></h2>
                    </Link>
                    <Link prefetch href={{ pathname: '/navigation', query: { text: 'auto' } }}>
                        <h2>Auto</h2>
                    </Link>
                    <Link prefetch href={{ pathname: '/navigation', query: { text: 'finance' } }}>
                        <h2>Finance</h2>
                    </Link>
                    <Link prefetch href={{ pathname: '/navigation', query: { text: 'sport' } }}>
                        <h2>Sport</h2>
                    </Link>
                    <Link prefetch href={{ pathname: '/navigation', query: { text: 'games' } }}>
                        <h2>Games</h2>
                    </Link>
                    <Link prefetch href={{ pathname: '/navigation', query: { text: 'it' } }}>
                        <h2>IT</h2>
                    </Link>
                    <Link prefetch href={{ pathname: '/navigation', query: { text: 'other' } }}>
                        <h2>Other</h2>
                    </Link>
                </div>
                <div className={css.FollowContainer}>
                    <div className={css.NavigationFollow}>
                        <i className="fa fa-plus" aria-hidden="true">
                            <span>FOLLOW</span>
                        </i>
                    </div>
                    <div className={css.SocialIconsNavigation}>
                        <ul>
                            <li className={css.youtubeNavigation}>
                                <a href="#" target="_blank" className="fa fa-youtube fa-sm">
                                    <span>YouTube</span>
                                </a>
                            </li>
                            <li className={css.twitterNavigation}>
                                <a href="#" target="_blank" className="fa fa-twitter fa-sm">
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li className={css.instagramNavigation}>
                                <a href="#" target="_blank" className="fa fa-instagram fa-sm">
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li className={css.facebookNavigation}>
                                <a href="#" target="_blank" className="fa fa-facebook fa-sm">
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li className={css.vkNavigation}>
                                <a href="#" target="_blank" className="fa fa-vk fa-sm">
                                    <span>VK</span>
                                </a>
                            </li>
                            <li className={css.pinterestNavigation}>
                                <a href="#" target="_blank" className="fa fa-pinterest fa-sm">
                                    <span>Pinterest</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={css.NavigationSearch}>
                    <div className={css.NavigationSearchIcon} onClick={this.onClick = this.onClick.bind(this)}>
                        <i className="fa fa-search fa-lg" aria-hidden="true"></i>
                    </div>
                    {searchDisplay}
                </div>
            </div>
        )
    }

    onClick() {
        this.setState({display: ++this.state.display})
    }

}

export default NavigationForm