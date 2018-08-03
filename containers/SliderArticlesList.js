import React, { Component } from 'react'
import SliderArticles from '../components/SliderArticles'
import Carousel from 'nuka-carousel';
import css from '../style.css'



class SliderArticlesList extends Component {
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
            <div className={css.MainSliderContainer}>
                <div className={css.MainSliderOne}>
                    <Carousel slidesToShow={4} cellAlign="left"
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
                </div>
                <div className={css.MainSliderTwo}>
                    <Carousel slidesToShow={1} cellAlign="left" vertical={true} 
                    autoplayInterval={2300} swiping={true}
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
                </div>
                <div className={css.MainSliderThree}>
                <Carousel slidesToShow={1} cellAlign="left" vertical={true} swiping={true}
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
            </div>
            </div>
        )
    }
}



export default SliderArticlesList