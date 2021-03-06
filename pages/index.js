import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import MainArticles from '../containers/MainArticles'
import AsideArticlesList from '../containers/AsideArticlesList'
import SliderArticlesList from '../containers/SliderArticlesList'
import Social from '../components/Social'
import Footer from '../containers/Footer'
import Header from '../containers/Header'
import NavigationForm from '../components/NavigationForm'
import BottomNavigationForm from '../components/NavigationBottomForm'
import NavMobileForm from '../components/NavMobileForm'
import Sticky from 'react-stickynode'
import css from "../style.css"

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            art: this.props.articles,
            logoScroll: false,
            displayMenu: 2,
            sliderDisplay: false
        }
    }

    componentDidMount() {
        this.setState({sliderDisplay: true})
    }

    render() {
        const handleStateChange = (status) => {
            if (status.status === Sticky.STATUS_FIXED) {
                this.setState({logoScroll: true});
            } else {
                this.setState({logoScroll: false})
            }
        }

        let carousel;
        this.state.sliderDisplay === true
        ? carousel = <div className={css.MainSliderContainer}>
                        <SliderArticlesList sliderArticles={this.props.sliderArticles} />
                    </div>

        : carousel = <img className={css.preloaderImg} src="./static/weather/preloader.gif" alt="preloader"/>
        return (
            <div className={css.container}>
                <header className={css.header}>
                    <div className={css.SocialContainer}>
                        <div className={css.SocialIconsContainer}>
                        </div>
                    </div>  
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
                <section className={css.MainSlider}>
                    {carousel}
                </section>
                <div className={css.IndexContainer}>
                    <div className={css.MainAsideContainer}>
                        <main className={css.main}>
                            <article className={css.article}>
                                <MainArticles art={this.state.art} />
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
        let countArticles = this.state.art.length;
        let tt = await fetch(`http://localhost:3000/api/${countArticles}/nextarticles`)
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
        this.setState({ art: this.state.art.concat(tt) })

    }
}

Index.getInitialProps = async () => {
    const data = await fetch('http://localhost:3000/api/mainarticles')
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
        articles: data,
        asideArticles: dataAside,
        sliderArticles: dataSlider
    }
}

export default Index