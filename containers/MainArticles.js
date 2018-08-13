import React, { Component } from 'react'
import IndexArticles from '../components/IndexArticles'
import Social from '../components/Social'
import css from '../style.css'



class MainArticles extends Component {
    render() {
        const mainList = this.props.art.map(t => {
            return <IndexArticles
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                count={t[0].count}
                navigation={t[0].navigation}
            />
        })
        return (
            <React.Fragment>
                <section className={css.MainArticlesTitle}>
                    <h1>Новые записи</h1>
                    <span></span>    
                    <Social />
                </section>
                <div className={css.articlesList}>
                    {mainList}
                </div>
            </React.Fragment>
        )
    }
}

export default MainArticles