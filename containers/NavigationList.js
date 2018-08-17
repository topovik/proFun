import React, { Component } from 'react'
import NavigationArticles from '../components/NavigationArticles'
import css from '../style.css'

class NavigationList extends Component {
    render() {
        const navigationList = this.props.navigation.map(t => {
            return <NavigationArticles
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                count={t[0].count}
                navigation={t[0].navigation}
            />
        })

        const navigationTitle = this.props.navigation.map(r => {
            return <h1 key={r[0].id}>{r[0].navigation}</h1>
        })

        return (
            <React.Fragment>
                <div className={css.searchResultContainer}>
                    {navigationTitle[0]}
                    <span></span>
                </div>
                <div className={css.SearchList}>
                    {navigationList}
                </div>
            </React.Fragment>
        )
    }
}

export default NavigationList