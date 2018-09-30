import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import ArticlesList from '../containers/ArticlesList'
import AsideArticlesList from '../containers/AsideArticlesList'
import SearchForm from '../components/SearchForm'
import NavigationForm from '../components/NavigationForm'
import Social from '../components/Social'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import SliderNeedSee from '../containers/SliderNeedSee'
import BottomNavigationForm from '../components/NavigationBottomForm'
import NavMobileForm from '../components/NavMobileForm'
import Sticky from 'react-stickynode'
import css from '../style.css'

class Article extends Component {
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
            <div className={css.pageContainerNeedSee}>
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
                <div className={css.IndexArticlesContainer}>
                    <div className={css.pageMainAsideContainer}>
                        <div className={css.pageMainSliderContainer}>
                            <main className={css.pageMain}>
                                <article className={css.pageArticle}>
                                    <ArticlesList dataArticle={this.props.dataArticle} />
                                </article>
                            </main>
                            <section className={css.SliderNeedSee}>
                                <SliderNeedSee sliderArticles={this.props.sliderArticles} />
                            </section>
                        </div>
                        <aside className={css.aside} id="aside">
                            <Sticky bottomBoundary="#aside" top='#navigation'>
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

Article.getInitialProps = async (req) => {
    let idArticle = req.query.id
    const data = await fetch(`http://localhost:3000/api/${idArticle}/article`)
        .then(response => response.json())
        .then(t => t.map(obj => {
            return [{
                id: obj.id,
                title: obj.title,
                description: obj.description,
                ogImgUrl: obj.ogImgUrl,
                keywords: obj.keywords,
                text: [{
                    p1: obj.text.t1,
                    p2: obj.text.t2,
                    p3: obj.text.t3,
                    p4: obj.text.t4,
                    p5: obj.text.t5,
                    p6: obj.text.t6,
                    p7: obj.text.t7,
                    p8: obj.text.t8,
                    p9: obj.text.t9,
                    p10: obj.text.t10,
                    p11: obj.text.t11,
                    p12: obj.text.t12,
                    p13: obj.text.t13,
                    p14: obj.text.t14,
                    p15: obj.text.t15,
                    p16: obj.text.t16,
                    p17: obj.text.t17,
                    p18: obj.text.t18,
                    p19: obj.text.t19,
                    p20: obj.text.t20,
                    p21: obj.text.t21,
                    p22: obj.text.t22,
                    p23: obj.text.t23,
                    p24: obj.text.t24,
                    p25: obj.text.t25,
                    p26: obj.text.t26,
                    p27: obj.text.t27,
                    p28: obj.text.t28,
                    p29: obj.text.t29,
                    p30: obj.text.t30,
                    p31: obj.text.t31,
                    p32: obj.text.t32,
                    p33: obj.text.t33,
                    p34: obj.text.t34,
                    p35: obj.text.t35,
                    p36: obj.text.t36,
                    p37: obj.text.t37,
                    p38: obj.text.t38,
                    p39: obj.text.t39,
                    p40: obj.text.t40,
                    p41: obj.text.t41,
                    p42: obj.text.t42,
                    p43: obj.text.t43,
                    p44: obj.text.t44,
                    p45: obj.text.t45,
                    p46: obj.text.t46,
                    p47: obj.text.t47,
                    p48: obj.text.t48,
                    p49: obj.text.t49,
                    p50: obj.text.t50,
                    p51: obj.text.t51,
                    p52: obj.text.t52,
                    p53: obj.text.t53,
                    p54: obj.text.t54,
                    p55: obj.text.t55,
                    p56: obj.text.t56,
                    p57: obj.text.t57,
                    p58: obj.text.t58,
                    p59: obj.text.t59,
                    p60: obj.text.t60,
                    tags: obj.text.tags
                }]
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
        dataArticle: data,
        asideArticles: dataAside,
        sliderArticles: dataSlider,
        title: data[0][0].title,
        description: data[0][0].description,
        keywords: data[0][0].keywords,
        ogImgUrl: `https://profun.app${data[0][0].ogImgUrl}`,
        ogUrl: `https://profun.app/article?id=${data[0][0].id}`
    }
}

export default Article