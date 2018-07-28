import React, { Component } from 'react'
import Link from 'next/link'
import css from "../style.css"

class SearchForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            txt: ''
        }
    }
    render() {
        return (
            <form>
                <input placeholder="Search proFun.app" className={css.inputForm} type="text" value={this.state.txt} onChange={this.onChange = this.onChange.bind(this)}/>
                <Link prefetch href={{ pathname: '/search', query: { text: this.state.txt } }}>
                    <button className={css.buttonForm}><i className="fa fa-search" aria-hidden="true"></i></button>
                </Link>
            </form>
        )
    }

    onChange(e) {
        this.setState({ txt: e.target.value })
    }

}

export default SearchForm