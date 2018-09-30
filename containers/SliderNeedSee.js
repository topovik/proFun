import React, { Component } from 'react'
import SliderArticlesNeedSee from '../components/SliderArticlesNeedSee'
import Siema from 'siema'
import css from '../style.css'

class SliderNeedSee extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.siema = new Siema({
            perPage: {
                320: 1,
                615: 2,
                800: 2,
                970: 2,
                1115: 2,
                1320: 3,
                1470: 3
            },
            duration: 250,
            loop: true,
        });
        setInterval(() => this.siema.next(), 2000)
    }
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
            <React.Fragment>
                <div className="siema">
                    {sliderList}
                </div>
            </React.Fragment>
        )
    }
}



export default SliderNeedSee