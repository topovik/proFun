import React, { Component } from 'react'
import SearchArticles from '../components/SearchArticles'

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
                {searchList}
            </React.Fragment>
        )
    }

}
export default SearchList