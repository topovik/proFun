import React, { Component } from 'react'
import css from "../style.css"

class Social extends Component {
    render() {
        return (
            <div className={css.SocialIcons}>
                <div className={css.instagram}>
                    <a href="#" target="_blank"><i className="fa fa-instagram fa-lg"></i></a>
                </div>
                <div className={css.facebook}>
                    <a href="#" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                </div>
                <div className={css.vk}>
                    <a href="#" target="_blank"><i className="fa fa-vk fa-lg"></i></a>
                </div>
                <div className={css.pinterest}>
                    <a href="#" target="_blank"><i className="fa fa-pinterest fa-lg"></i></a>
                </div>
            </div>

        )
    }
}

export default Social