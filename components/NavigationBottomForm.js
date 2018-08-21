import React, { Component } from 'react'
import Link from 'next/link'
import ScrollToTop from "react-scroll-up"
import css from "../style.css"

class BottomNavigationForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={css.BottomNavigationForm}>
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
                <div className={css.ButtonToTop}>
                    <ScrollToTop duration={1000} showUnder={160} style={{position: 'none'}}>
                        <span>BACK TO TOP</span><i className="fa fa-arrow-up" aria-hidden="true"></i>
                    </ScrollToTop>
                </div>
            </React.Fragment>
        )
    }
}

export default BottomNavigationForm