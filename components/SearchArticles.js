import React, { Component } from 'react'
import Link from 'next/link'
import css from '../style.css'



class SearchArticles extends Component {

    render() {
        return (
            <React.Fragment>
                <Link prefetch href={{ pathname: '/article', query: { id: this.props.item.id } }}>
                    <div className={css.searchContainer}>
                        <p>{this.props.title}</p>
                        <img src={this.props.images} alt={this.props.title} />
                        <span>{this.props.count}</span>
                    </div>
                </Link>
            </React.Fragment>

        )
    }

}


export default SearchArticles