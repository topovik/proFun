import React, { Component } from 'react'
import SliderArticles from '../components/SliderArticles'
import Carousel from 'nuka-carousel'


class MainSliderArticlesList extends Component {
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
            <Carousel slidesToShow={3} cellAlign="left" framePadding="0 0 -3px 0"
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
        )
    }
}



export default MainSliderArticlesList