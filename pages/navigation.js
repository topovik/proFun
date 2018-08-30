import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import NavigationList from '../containers/NavigationList'
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

class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            art: this.props.navigation,
            logoScroll: false,
            navigationTxt: this.props.backNavigation,
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
        
        let seeMore;
        this.state.navigationTxt !== this.props.backNavigation ? seeMore = this.props.navigation : seeMore = this.state.art

        return (
            <div className={css.pageNavigationArticles}>
                <header className={css.header}>
                    <div className={css.headerContainer}>
                        <Header />
                        <div className={css.MenuButton} style={{color: "grey"}} onClick={this.onClickMobile = this.onClickMobile.bind(this)}><i className="fa fa-th fa-2x" aria-hidden="true"></i></div>
                    </div>
                </header>
                <nav className={css.Navigation} id="navigation"> 
                    <Sticky onStateChange={handleStateChange} innerZ={999}>
                        <div className={css.NavigationSection}>
                            <NavigationForm backNavigation={this.props.backNavigation} logoScroll={this.state.logoScroll}/>
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
                                <NavigationList navigation={seeMore} />
                            </article>
                            <button className={css.IndexButton} onClick={this.onClick = this.onClick.bind(this)}>See More</button>
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

    async onClick() {
        let countArticles = this.props.navigation.length;
        let navigationTxt = this.props.backNavigation
        let tt = await fetch(`http://localhost:3000/api/${navigationTxt}/${countArticles}/nextnavigation`)
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
        this.setState({art: this.props.navigation.concat(tt), navigationTxt: this.props.backNavigation})    
    }

}

Navigation.getInitialProps = async (req) => {
    let navigationText = String(req.query.text);
    const data = await fetch(`http://localhost:3000/api/${navigationText}/navigation`)
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

        const dataAside = await fetch('http://localhost:3000/api/asidearticles')
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

        const dataSlider = await fetch('http://localhost:3000/api/sliderarticles')
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
        navigation: data,
        asideArticles: dataAside,
        sliderArticles: dataSlider,
        backNavigation: navigationText
    }
}

export default Navigation