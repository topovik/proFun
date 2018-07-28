import React, { Component } from 'react'
import Link from 'next/link'
import css from '../style.css'

class AsideArticles extends Component {

    render() {
        return (
            <React.Fragment>
                <Link prefetch href={{ pathname: '/article', query: { id: this.props.item.id } }}>
                    <div className={css.articleAside}>
                        <h4>{this.props.title}</h4>
                        <img src={this.props.images} alt={this.props.title} />
                        <span className={css.articleIcon}><i className="fa fa-eye" aria-hidden="true"></i></span>
                        <span className={css.articleCount}>{this.props.count}</span>
                    </div>
                </Link>
            </React.Fragment>

        )
    }

}


export default AsideArticles