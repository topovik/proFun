import React, { Component } from 'react'
import SliderArticles from '../components/SliderArticles'
import Siema from 'siema'
import css from '../style.css'
import SliderArticlesSearch from '../components/SliderArticlesSearch'

class SearchSliderArticlesList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.siema = new Siema({
            perPage: {
                320: 1,
                615: 1,
                800: 1,
                970: 1,
                1115: 1,
                1320: 1,
                1470: 1
            },
            duration: 250,
            loop: true,
        });
        setInterval(() => this.siema.next(), 2000)
    }

    render() {
        const sliderList = this.props.sliderArticles.map(t => {
            return <SliderArticlesSearch
                title={t[0].title}
                images={t[0].images}
                key={t[0].id}
                item={t[0]}
                count={t[0].count}
                navigation={t[0].navigation}
            />
        })
        return (
            <React.Fragment>
                <div className="siema">
                    <div>
                        {sliderList}
                    </div>
                    <div>
                        {sliderList}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchSliderArticlesList