import React, { Component } from 'react'
import AsideArticles from '../components/AsideArticles'



class AsideArticlesList extends Component {
    render() {
        const asideList = this.props.asideArticles.map(t => {
            return <AsideArticles
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                count={t[0].count}
            />
        })
        return (
            <React.Fragment>
                {asideList}
            </React.Fragment>
        )
    }
}



export default AsideArticlesList