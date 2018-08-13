import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import SearchList from '../containers/SearchList'
import SearchForm from '../components/SearchForm'
import NavigationForm from '../components/NavigationForm'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import AsideArticlesList  from '../containers/AsideArticlesList'
import SearchSliderArticlesList from '../containers/SearchSliderArticlesList'
import Sticky from 'react-stickynode'
import css from '../style.css'

class Search extends Component {
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
            <div className={css.pageSearchArticles}>
                <header className={css.header}>
                    <Header />
                </header>
                <nav className={css.Navigation}> 
                    <Sticky onStateChange={handleStateChange} innerZ={999}>
                        <NavigationForm logoScroll={this.state.logoScroll}/>
                    </Sticky>
                </nav> 
                <section className={css.SearchSlider} id="slider">
                    <Sticky enabled={true} bottomBoundary='#slider'>
                        <SearchSliderArticlesList sliderArticles={this.props.sliderArticles} />
                    </Sticky>
                </section>
                <main className={css.pageSearchMain}>
                    <article className={css.SearchArticle}>
                        <SearchList srchtxt={this.props.srchtxt} />
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

Search.getInitialProps = async (req) => {

    let searchText = String(req.query.text.toLowerCase());
    const data = await fetch(`http://localhost:3000/api/search`)
        .then(response => response.json())
        .then(item => item.map(object => {
            return {
                title: object.title,
                images: object.images,
                id: object.id,
                count: object.count
            }
        }))

        let answer = data.filter(t => {
            if(t.title.toLowerCase().includes(searchText) === true) {
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
        srchtxt: answer,
        asideArticles: dataAside,
        sliderArticles: dataSlider
    }
}

export default Search