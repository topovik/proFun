import React, { Component } from 'react'
import Link from 'next/link'
import css from "../style.css"

class SearchMobileForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            txt: '',
            hideMenu: +1
        }
    }
    render() {
        return (
            <form className={css.SearchMobileForm}>
                <input placeholder="Search..." className={css.inputMobileForm} type="text" value={this.state.txt} onChange={this.onChange = this.onChange.bind(this)}/>
                <Link prefetch href={{ pathname: '/search', query: { text: this.state.txt } }}>
                    <button onClick={() => {this.props.onClickHideMenu(this.state.hideMenu)}} className={css.buttonMobileForm}><i className="fa fa-search" aria-hidden="true"></i></button>
                </Link>
            </form>
        )
    }

    onChange(e) {
        this.setState({ txt: e.target.value })
    }

}

export default SearchMobileForm