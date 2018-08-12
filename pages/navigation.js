import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import NavigationList from '../containers/NavigationList'
import SearchForm from '../components/SearchForm'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import AsideArticlesList  from '../containers/AsideArticlesList'
import SearchSliderArticlesList from '../containers/SearchSliderArticlesList'
import Sticky from 'react-stickynode'
import css from '../style.css'

class Navigation extends Component {
    render() {
        return (
            <div className={css.pageSearchArticles}>
                <header className={css.header}>
                    <Header />
                </header>
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
        sliderArticles: dataSlider
    }
}

export default Navigation