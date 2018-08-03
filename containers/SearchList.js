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
        let searchRes = this.props.srchtxt[0]
        ? searchRes = <h1 className={css.searchResult}>Результаты поиска ...</h1> 
        : searchRes = <h1 className={css.searchResult}>Ничего не найдено ...</h1>

        return (
            <React.Fragment>
                {searchRes}
                {searchList}
            </React.Fragment>
        )
    }
}

export default SearchList