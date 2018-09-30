import React, { Component } from 'react'
import SliderArticles from '../components/SliderArticles'
import Siema from 'siema'
import css from '../style.css'

class SliderArticlesList extends Component {
    constructor(props) {
        super(props)
    }


    componentDidMount() {
        this.siema = new Siema({
            perPage: {
                320: 1,
                615: 2,
                800: 2,
                970: 3,
                1115: 3,
                1320: 4,
                1470: 4
            },
            duration: 250,
            loop: true,
        });
        setInterval(() => this.siema.next(), 2000)
      }

    render() {
        const sliderList = this.props.sliderArticles.map(t => {
            return <SliderArticles
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



export default SliderArticlesList