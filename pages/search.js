import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import SearchList from '../containers/SearchList'
import SearchForm from '../components/SearchForm'
import NavigationForm from '../components/NavigationForm'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import AsideArticlesList  from '../containers/AsideArticlesList'
import SearchSliderArticlesList from '../containers/SearchSliderArticlesList'
import BottomNavigationForm from '../components/NavigationBottomForm'
import NavMobileForm from '../components/NavMobileForm'
import Sticky from 'react-stickynode'
import css from '../style.css'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logoScroll: false,
            displayMenu: 2
        }
    }

    render() {
        const handleStateChange = (status) => {
            if (status.status === Sticky.STATUS_FIXED) {
                this.setState({logoScroll: true});
            } else {
                this.setState({logoScroll: false})
            }
        }
        return (
            <div className={css.pageSearchArticles}>
                <header className={css.header}>
                    <div className={css.headerContainer}>
                        <Header />
                        <div className={css.MenuButton} style={{color: "grey"}} onClick={this.onClickMobile = this.onClickMobile.bind(this)}><i className="fa fa-th fa-2x" aria-hidden="true"></i></div>
                    </div>
                </header>
                <nav className={css.Navigation} id="navigation"> 
                    <Sticky onStateChange={handleStateChange} innerZ={999}>
                        <div className={css.NavigationSection}>
                            <NavigationForm logoScroll={this.state.logoScroll}/>
                        </div>
                    </Sticky>
                </nav> 
                <div className={css.SearchNavigationContainer}>
                    <div className={css.SliderMainAsideContainer}>
                        <section className={css.SearchSlider} id="slider">
                            <Sticky bottomBoundary='#slider' top='#navigation'>
                                <SearchSliderArticlesList sliderArticles={this.props.sliderArticles} />
                            </Sticky>
                        </section>
                        <main className={css.pageSearchMain}>
                            <article className={css.SearchArticle}>
                                <SearchList srchtxt={this.props.srchtxt} />
                            </article>
                        </main>
                        <aside className={css.aside} id="aside">
                            <Sticky bottomBoundary='#aside' top='#navigation'>
                                <AsideArticlesList asideArticles={this.props.asideArticles} />
                            </Sticky>  
                        </aside>
                    </div>
                </div>
                <nav className={css.NavigationFooter}>
                    <div className={css.BottomNavigationSection}>
                        <BottomNavigationForm />
                    </div>
                </nav>
                <div>
                    <NavMobileForm displayMenu={this.state.displayMenu} onClickHideMenu={this.onClickHideMenu}/>
                </div>
                <footer className={css.footer}>
                    <div className={css.FooterContainer}>
                        <Footer />
                    </div>
                </footer>
            </div>
        )
    }

    onClickMobile() {
        this.setState({displayMenu: ++this.state.displayMenu})
    }

    onClickHideMenu = (value) => {
        this.setState({displayMenu: this.state.displayMenu + value})
    }

}

Search.getInitialProps = async (req) => {

    let searchText = String(req.query.text.toLowerCase());
    const data = await fetch(`https://profun/api/search`)
        .then(response => response.json())
        .then(item => item.map(object => {
            return {
                title: object.title,
                images: object.images,
                id: object.id,
                count: object.count,
                navigation: object.navigation
            }
        }))

        let answer = data.filter(t => {
            if(t.title.toLowerCase().includes(searchText) === true) {
                return t
            }
        })

        const dataAside = await fetch('https://profun/api/asidearticles')
        .then(response => response.json())
        .then(item => item.map(object => {
            return [{
                title: object.title,
                images: object.images,
                id: object.id,
                count: object.count,
                navigation: object.navigation
            }]
        }))

        const dataSlider = await fetch('https://profun/api/sliderarticles')
        .then(response => response.json())
        .then(item => item.map(object => {
            return [{
                title: object.title,
                images: object.images,
                id: object.id,
                count: object.count,
                navigation: object.navigation
            }]
        })) 

    return {
        srchtxt: answer,
        asideArticles: dataAside,
        sliderArticles: dataSlider
    }
}

export default Search