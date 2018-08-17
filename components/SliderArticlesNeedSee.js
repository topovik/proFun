import React, { Component } from 'react'
import Link from 'next/link'
import css from '../style.css'

class SliderArticles extends Component {
    render() {
        let backColor;
        switch(this.props.navigation) {
            case "auto":
                backColor = <Link prefetch href={{ pathname: '/navigation', query: { text: 'auto' } }}>
                                <h5 className={css.backColorAuto}>{this.props.navigation}</h5>
                            </Link>
                break;
            case "finance":
                backColor = <Link prefetch href={{ pathname: '/navigation', query: { text: 'finance' } }}> 
                                <h5 className={css.backColorFinance}>{this.props.navigation}</h5>
                            </Link>
                break;
            case "sport":
                backColor = <Link prefetch href={{ pathname: '/navigation', query: { text: 'sport' } }}>
                                <h5 className={css.backColorSport}>{this.props.navigation}</h5>
                            </Link>
                break;
            case "games":
                backColor = <Link prefetch href={{ pathname: '/navigation', query: { text: 'games' } }}>
                                <h5 className={css.backColorGames}>{this.props.navigation}</h5>
                            </Link>
                break;
            case "it":
                backColor = <Link prefetch href={{ pathname: '/navigation', query: { text: 'it' } }}>
                                <h5 className={css.backColorIt}>{this.props.navigation}</h5>
                            </Link>
                break;
            case "other":
                backColor = <Link prefetch href={{ pathname: '/navigation', query: { text: 'other' } }}>
                                <h5 className={css.backColorOther}>{this.props.navigation}</h5>
                            </Link>
                break;

            default:
                break;
        }

        let backHover;
        switch(this.props.navigation) {
            case "auto":
                backHover = <div className={css.auto}>
                                <h3>{this.props.title}</h3>
                                <i className="fa fa-eye" aria-hidden="true"></i>
                                <span>{this.props.count}</span>
                            </div>
            break;

            case "finance":
                backHover = <div className={css.finance}>
                            <h3>{this.props.title}</h3>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            <span>{this.props.count}</span>
                        </div>
            break;

            case "sport":
                backHover = <div className={css.sport}>
                            <h3>{this.props.title}</h3>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            <span>{this.props.count}</span>
                        </div>
            break;

            case "games":
                backHover = <div className={css.games}>
                            <h3>{this.props.title}</h3>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            <span>{this.props.count}</span>
                        </div>
            break;

            case "it":
                backHover = <div className={css.it}>
                            <h3>{this.props.title}</h3>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            <span>{this.props.count}</span>
                        </div>
            break;

            case "other":
                backHover = <div className={css.other}>
                            <h3>{this.props.title}</h3>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            <span>{this.props.count}</span>
                        </div>
            break;

            default: 
            break;
        }

        return (
            <React.Fragment>
                <Link prefetch href={{ pathname: '/article', query: { id: this.props.item.id } }}>
                    <div className={css.articleSliderNeedSeeContainer}>
                        {backColor}
                        <img src={this.props.images} alt={this.props.title} />
                        {backHover}
                    </div>
                </Link>
            </React.Fragment>

        )
    }
}


export default SliderArticles