import React, { Component } from 'react'
import Link from 'next/link'
import css from '../style.css'



class NavigationArticles extends Component {

    render() {
        return (
            <React.Fragment>
                <Link prefetch href={{ pathname: '/article', query: { id: this.props.item.id } }}>
                    <div className={css.searchContainer}>
                        <h3>{this.props.title}</h3>
                        <img src={this.props.images} alt={this.props.title} />
                    </div>
                </Link>
            </React.Fragment>

        )
    }

}


export default NavigationArticles