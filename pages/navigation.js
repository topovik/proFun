import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import NavigationList from '../containers/NavigationList'
import SearchForm from '../components/SearchForm'
import NavigationForm from '../components/NavigationForm'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import AsideArticlesList  from '../containers/AsideArticlesList'
import SearchSliderArticlesList from '../containers/SearchSliderArticlesList'
import Sticky from 'react-stickynode'
import css from '../style.css'

class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
            <div className={css.pageNavigationArticles}>
                <header className={css.header}>
                    <Header />
                </header>
                <nav className={css.Navigation}> 
                    <Sticky onStateChange={handleStateChange} innerZ={999}>
                        <NavigationForm backNavigation={this.props.backNavigation} logoScroll={this.state.logoScroll}/>
                    </Sticky>
                </nav>
                <section className={css.SearchSlider} id="slider">
                    <Sticky enabled={true} bottomBoundary='#slider'>
                        <SearchSliderArticlesList sliderArticles={this.props.sliderArticles} />
                    </Sticky>
                </section>
                <main className={css.pageSearchMain}>
                    <article className={css.SearchArticle}>
                        <NavigationList navigation={this.props.navigation} />
                    </article>
                </main>
                <aside className={css.aside}>
                    <AsideArticlesList asideArticles={this.props.asideArticles}/>
                </aside>
                <footer className={css.footer}>
                    <Footer />
                </footer>
            </div>
        )
    }

}

Navigation.getInitialProps = async (req) => {
    let navigationText = String(req.query.text);
    const data = await fetch(`http://localhost:3000/api/mainarticles`)
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
            if(t.navigation === navigationText) {
                return t
            }
        })

        const dataAside = await fetch('http://localhost:3000/api/asidearticles')
        .then(response => response.json())
        .then(item => item.map(object => {
            return [{
                title: object.title,
                images: object.images,
                id: object.id,
                count: object.count
            }]
        }))

        const dataSlider = await fetch('http://localhost:3000/api/sliderarticles')
        .then(response => response.json())
        .then(item => item.map(object => {
            return [{
                title: object.title,
                images: object.images,
                id: object.id,
                count: object.count
            }]
        })) 

    return {
        navigation: answer,
        asideArticles: dataAside,
        sliderArticles: dataSlider,
        backNavigation: navigationText
    }
}

export default Navigation