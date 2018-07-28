import React, { Component } from 'react'
import Articles from '../components/Articles'


class ArticlesList extends Component {
    render() {
        const list = this.props.dataArticle.map(t => {
            return <Articles
                key={t[0].id}
                title={t[0].title}
                p1={t[0].text[0].p1}
                p2={t[0].text[0].p2}
                p3={t[0].text[0].p3}
                p4={t[0].text[0].p4}
                p5={t[0].text[0].p5}
                p6={t[0].text[0].p6}
                p7={t[0].text[0].p7}
                p8={t[0].text[0].p8}
                p9={t[0].text[0].p9}
                p10={t[0].text[0].p10}
                p11={t[0].text[0].p11}
                p12={t[0].text[0].p12}
                p13={t[0].text[0].p13}
                p14={t[0].text[0].p14}
                p15={t[0].text[0].p15}
                p16={t[0].text[0].p16}
                p17={t[0].text[0].p17}
                p18={t[0].text[0].p18}
                p19={t[0].text[0].p19}
                p20={t[0].text[0].p20}
                p21={t[0].text[0].p21}
                p22={t[0].text[0].p22}
                p23={t[0].text[0].p23}
                p24={t[0].text[0].p24}
                p25={t[0].text[0].p25}
                p26={t[0].text[0].p26}
                p27={t[0].text[0].p27}
                p28={t[0].text[0].p28}
                p29={t[0].text[0].p29}
                p30={t[0].text[0].p30}
                p31={t[0].text[0].p31}
                p32={t[0].text[0].p32}
                p33={t[0].text[0].p33}
                p34={t[0].text[0].p34}
                p35={t[0].text[0].p35}
                p36={t[0].text[0].p36}
                p37={t[0].text[0].p37}
                p38={t[0].text[0].p38}
                p39={t[0].text[0].p39}
                p40={t[0].text[0].p40}
                p41={t[0].text[0].p41}
                p42={t[0].text[0].p42}
                p43={t[0].text[0].p43}
                p44={t[0].text[0].p44}
                p45={t[0].text[0].p45}
                p46={t[0].text[0].p46}
                p47={t[0].text[0].p47}
                p48={t[0].text[0].p48}
                p49={t[0].text[0].p49}
                p50={t[0].text[0].p50}
                p51={t[0].text[0].p51}
                p52={t[0].text[0].p52}
                p53={t[0].text[0].p53}
                p54={t[0].text[0].p54}
                p55={t[0].text[0].p55}
                p56={t[0].text[0].p56}
                p57={t[0].text[0].p57}
                p58={t[0].text[0].p58}
                p59={t[0].text[0].p59}
                p60={t[0].text[0].p60}
            />
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}



export default ArticlesList