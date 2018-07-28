import React, { Component } from 'react'
import IndexArticles from '../components/IndexArticles'



class MainArticles extends Component {
    render() {
        const mainList = this.props.art.map(t => {
            return <IndexArticles
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                count={t[0].count}
            />
        })
        return (
            <React.Fragment>
                {mainList}
            </React.Fragment>
        )
    }
}

export default MainArticles