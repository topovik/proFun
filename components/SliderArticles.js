import React, { Component } from 'react'
import Link from 'next/link'
import css from '../style.css'

class SliderArticles extends Component {

    render() {
        return (
            <React.Fragment>
            <Link prefetch href={{ pathname: '/article', query: { id: this.props.item.id } }}>
                <div className={css.articleSlider}>
                    <img className={css.articleImg} src={this.props.images} alt={this.props.title} />
                    <div className={css.articleTitle}>
                        <h4>{this.props.title}</h4>
                        <span className={css.articleIcon}><i className="fa fa-eye" aria-hidden="true"></i></span>
                        <span className={css.articleCount}>{this.props.count}</span>
                    </div>
                </div>
            </Link>
        </React.Fragment>

        )
    }

}


export default SliderArticles