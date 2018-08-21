import React, { Component } from 'react'
import SliderArticlesNeedSee from '../components/SliderArticlesNeedSee'
import Carousel from 'nuka-carousel'
import css from '../style.css'

class SliderNeedSee extends Component {
    render() {
        const sliderList = this.props.sliderArticles.map(t => {
            return <SliderArticlesNeedSee
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                count={t[0].count}
                navigation={t[0].navigation}
            />
        })
        return (
                <Carousel slidesToShow={3} cellAlign="left" autoplay={true}
                    cellSpacing={6}
                    renderCenterLeftControls={({ previousSlide }) => (
                        <React.Fragment></React.Fragment>
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <React.Fragment></React.Fragment>
                    )}
                    renderBottomCenterControls={({ goToSlide }) => (
                        <React.Fragment></React.Fragment>
                    )}
                    >
                    {sliderList}
                </Carousel>

        )
    }
}



export default SliderNeedSee