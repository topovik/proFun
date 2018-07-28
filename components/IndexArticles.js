import React, { Component } from 'react'
import Link from 'next/link'
import css from '../style.css'

class IndexArticles extends Component {
    render() {
        return (
            <React.Fragment>
                <Link prefetch href={{ pathname: '/article', query: { id: this.props.item.id } }}>
                    <div className={css.articleContainer}>
                        <img src={this.props.images} alt={this.props.title} />
                        <div className={css.articleTitle}>
                            <h3>{this.props.title}</h3>
                            <span className={css.articleIcon}><i className="fa fa-eye" aria-hidden="true"></i></span>
                            <span className={css.articleCount}>{this.props.count}</span>
                        </div>
                    </div>
                </Link>
            </React.Fragment>

        )
    }
}


export default IndexArticles