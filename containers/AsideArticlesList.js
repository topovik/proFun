import React, { Component } from 'react'
import AsideArticles from '../components/AsideArticles'
import css from '../style.css'



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
                <p className={css.asideTitle}>Популярное ...</p>
                {asideList}
            </React.Fragment>
        )
    }
}



export default AsideArticlesList