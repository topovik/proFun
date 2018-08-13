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
import Sticky from 'react-stickynode'
import css from "../style.css"

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            art: this.props.articles,
            logoScroll: false
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
            <div className={css.container}>
                <header className={css.header}>
                    <Header />
                </header>
                <nav className={css.Navigation}> 
                    <Sticky onStateChange={handleStateChange} innerZ={999}>
                       <NavigationForm logoScroll={this.state.logoScroll}/>
                    </Sticky>
                </nav> 
                <section className={css.MainSlider}>
                    <SliderArticlesList sliderArticles={this.props.sliderArticles} />
                </section>
                <main className={css.main}>
                    <article className={css.article}>
                        <MainArticles art={this.state.art} articles={this.props.articles} nextArticles={this.props.nextArticles} />
                    </article>
                    <button className={css.IndexButton} onClick={this.onClick = this.onClick.bind(this)}>See More</button>
                </main>
                <aside className={css.aside} id="aside">
                    <Sticky bottomBoundary='#aside'>
                        <AsideArticlesList asideArticles={this.props.asideArticles} />
                    </Sticky>
                </aside>
                <nav className={css.NavigationFooter}>
                    <BottomNavigationForm />
                </nav>
                <footer className={css.footer}>
                    <Footer />
                </footer>
            </div>

        )
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