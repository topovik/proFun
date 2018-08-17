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
        ? searchRes = <h1>Результаты поиска ...</h1> 
        : searchRes = <h1>Ничего не найдено ...</h1>

        return (
            <React.Fragment>
                <div className={css.searchResultContainer}>
                    {searchRes}
                    <span></span>
                </div>
                <div className={css.SearchList}>
                    {searchList}
                </div>
            </React.Fragment>
        )
    }
}

export default SearchList