import React, { Component } from 'react'
import SearchArticles from '../components/SearchArticles'
import css from '../style.css'

class SearchList extends Component {
    render() {
        const searchList = this.props.srchtxt.map(t => {
            return <SearchArticles
                title={t.title}
                images={t.images}
                key={t.id}
                item={t}
                count={t.count}
            />
        })
        return (
            <React.Fragment>
                <h1 className={css.searchResult}>Результаты поиска ...</h1>
                {searchList}
            </React.Fragment>
        )
    }

}
export default SearchList