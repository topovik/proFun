import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import ArticlesList from '../containers/ArticlesList'
import AsideArticlesList from '../containers/AsideArticlesList'
import SearchForm from '../components/SearchForm'
import Social from '../components/Social'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import SliderArticlesList from '../containers/SliderArticlesList'
import css from '../style.css'


class Article extends Component {
    render() {
        return (
            <div className={css.pageContainerNeedSee}>
                <header className={css.header}>
                    <Header />
                </header>
                <main className={css.pageMain}>
                    <article className={css.pageArticle}>
                        <ArticlesList dataArticle={this.props.dataArticle} />
                    </article>
                </main>
                <aside className={css.aside}>
                    <AsideArticlesList asideArticles={this.props.asideArticles} />
                </aside>
                <section className={css.SliderNeedSee}>
                    <SliderArticlesList sliderArticles={this.props.sliderArticles} />
                </section>
                <footer className={css.footer}>
                    <Footer />
                </footer>
            </div>
        )
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
                    p60: obj.text.t60

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
        dataArticle: data,
        asideArticles: dataAside,
        sliderArticles: dataSlider
    }
}

export default Article