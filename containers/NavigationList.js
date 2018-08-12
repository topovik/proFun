import React, { Component } from 'react'
import NavigationArticles from '../components/NavigationArticles'
import css from '../style.css'

class NavigationList extends Component {
    render() {
        const navigationList = this.props.navigation.map(t => {
            return <NavigationArticles
                title={t.title}
                images={t.images}
                key={t.id}
                item={t}
                count={t.count}
                navigation={t.navigation}
            />
        })

        const navigationTitle = this.props.navigation.map(t => {
            return <h1 key={t.id}>{t.navigation}</h1>
        })

        return (
            <React.Fragment>
                {navigationTitle}
                {navigationList}
            </React.Fragment>
        )
    }
}

export default NavigationList