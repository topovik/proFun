import React from 'react'
import Social from '../components/Social'
import Link from 'next/link'

const Footer = () => {
    return (
        <React.Fragment>
            <Link prefetch href={{ pathname: '/'}}>
                <img src="/static/weather/proFun_Logo_footer.png" alt="logo"/>
            </Link>
            <Social />
            <p>© proFun.app 2018. All rights reserved.</p>
        </React.Fragment>
    )
}

export default Footer