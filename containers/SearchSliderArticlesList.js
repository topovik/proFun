import React, { Component } from 'react'
import SliderArticles from '../components/SliderArticles'
import Carousel from 'nuka-carousel'
import css from '../style.css'

class SearchSliderArticlesList extends Component {
    render() {
        const sliderList = this.props.sliderArticles.map(t => {
            return <SliderArticles
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                count={t[0].count}
            />
        })
        return (
            <React.Fragment>
                <h3 className={css.searchMustSee}>Must see ...</h3>
                <Carousel slidesToShow={4} cellAlign="left" vertical={true} wrapAround={false} 
                    framePadding="2px 0px"
                    renderCenterLeftControls={({ previousSlide }) => (
                        <React.Fragment></React.Fragment>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <React.Fragment></React.Fragment>
                    )}
                    renderBottomCenterControls={({ goToSlide }) => (
                        <React.Fragment></React.Fragment>
                    )}
                    autoplay={true}
                >
                    {sliderList}
                </Carousel>
            </React.Fragment>
        )
    }
}



export default SearchSliderArticlesList