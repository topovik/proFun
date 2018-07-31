import React from 'react'
import Social from '../components/Social'

const Footer = () => {
    return (
        <React.Fragment>
            <img src="/static/proFun_Logo_footer.png" alt="logo"/>
            <Social />
            <p>© proFun.app 2018. All rights reserved.</p>
        </React.Fragment>
    )
}

export default Footer