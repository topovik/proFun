import React from 'react'
import css from '../style.css'

const Articles = ({
    title, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23,
    p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45,
    p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, tags }) => {

    let test1; let test2; let test3; let test4; let test5; let test6; let test7; let test8; let test9;
    let test10; let test11; let test12; let test13; let test14; let test15; let test16; let test17;
    let test18; let test19; let test20; let test21; let test22; let test23; let test24; let test25;
    let test26; let test27; let test28; let test29; let test30; let test31; let test32; let test33;
    let test34; let test35; let test36; let test37; let test38; let test39; let test40; let test41;
    let test42; let test43; let test44; let test45; let test46; let test47; let test48; let test49;
    let test50; let test51; let test52; let test53; let test54; let test55; let test56; let test57;
    let test58; let test59; let test60; let testTags;

    //Test string and past src or text
    if (title !== undefined) {
        title.trim().slice(0, 1) === '/' ? test1 = <img src={title} alt={title} /> : test1 = <h1>{title}</h1>
    }

    if (p1 !== undefined) {
        if(p1.trim().slice(0, 1) === '/') {
            test2 = <img src={p1} alt={title} />
        } else {
            test2 = <p dangerouslySetInnerHTML={ {__html: p1} } />
        }
    }

    if (p2 !== undefined) {
        if(p2.trim().slice(0, 1) === '/') {
            test3 = <img src={p2} alt={title} />
        } else {
            test3 = <p dangerouslySetInnerHTML={ {__html: p2} } />
        }    
    }

    if (p3 !== undefined) {
        if(p3.trim().slice(0, 1) === '/') {
            test4 = <img src={p3} alt={title} />
        } else {
            test4 = <p dangerouslySetInnerHTML={ {__html: p3} } />
        }
    }

    if (p4 !== undefined) {
        if(p4.trim().slice(0, 1) === '/') {
            test5 = <img src={p4} alt={title} />
        } else {
            test5 = <p dangerouslySetInnerHTML={ {__html: p4} } />
        }
    }

    if (p5 !== undefined) {
        if(p5.trim().slice(0, 1) === '/') {
            test6 = <img src={p5} alt={title} />
        } else {
            test6 = <p dangerouslySetInnerHTML={ {__html: p5} } />
        }
    }

    if (p6 !== undefined) {
        if(p6.trim().slice(0, 1) === '/') {
            test7 = <img src={p6} alt={title} />
        } else {
            test7 = <p dangerouslySetInnerHTML={ {__html: p6} } />
        }
    }

    if (p7 !== undefined) {
        if(p7.trim().slice(0, 1) === '/') {
            test8 = <img src={p7} alt={title} />
        } else {
            test8 = <p dangerouslySetInnerHTML={ {__html: p7} } />
        }
    }

    if (p8 !== undefined) {
        if(p8.trim().slice(0, 1) === '/') {
            test9 = <img src={p8} alt={title} />
        } else {
            test9 = <p dangerouslySetInnerHTML={ {__html: p8} } />
        }
    }

    if (p9 !== undefined) {
        if(p9.trim().slice(0, 1) === '/') {
            test10 = <img src={p9} alt={title} />
        } else {
            test10 = <p dangerouslySetInnerHTML={ {__html: p9} } />
        }  
    }

    if (p10 !== undefined) {
        if(p10.trim().slice(0, 1) === '/') {
            test11 = <img src={p10} alt={title} />
        } else {
            test11 = <p dangerouslySetInnerHTML={ {__html: p10} } />
        }
    }

    if (p11 !== undefined) {
        if(p11.trim().slice(0, 1) === '/') {
            test12 = <img src={p11} alt={title} />
        } else {
            test12 = <p dangerouslySetInnerHTML={ {__html: p11} } />
        }
    }

    if (p12 !== undefined) {
        if(p12.trim().slice(0, 1) === '/') {
            test13 = <img src={p12} alt={title} />
        } else {
            test13 = <p dangerouslySetInnerHTML={ {__html: p12} } />
        }
    }

    if (p13 !== undefined) {
        if(p13.trim().slice(0, 1) === '/') {
            test14 = <img src={p13} alt={title} />
        } else {
            test14 = <p dangerouslySetInnerHTML={ {__html: p13} } />
        }
    }

    if (p14 !== undefined) {
        if(p14.trim().slice(0, 1) === '/') {
            test15 = <img src={p14} alt={title} />
        } else {
            test15 = <p dangerouslySetInnerHTML={ {__html: p14} } />
        }
    }

    if (p15 !== undefined) {
        if(p15.trim().slice(0, 1) === '/') {
            test16 = <img src={p15} alt={title} />
        } else {
            test16 = <p dangerouslySetInnerHTML={ {__html: p15} } />
        }
    }

    if (p16 !== undefined) {
        if(p16.trim().slice(0, 1) === '/') {
            test17 = <img src={p16} alt={title} />
        } else {
            test17 = <p dangerouslySetInnerHTML={ {__html: p16} } />
        }
    }

    if (p17 !== undefined) {
        if(p17.trim().slice(0, 1) === '/') {
            test18 = <img src={p17} alt={title} />
        } else {
            test18 = <p dangerouslySetInnerHTML={ {__html: p17} } />
        }
    }

    if (p18 !== undefined) {
        if(p18.trim().slice(0, 1) === '/') {
            test19 = <img src={p18} alt={title} />
        } else {
            test19 = <p dangerouslySetInnerHTML={ {__html: p18} } />
        }
    }

    if (p19 !== undefined) {
        if(p19.trim().slice(0, 1) === '/') {
            test20 = <img src={p19} alt={title} />
        } else {
            test20 = <p dangerouslySetInnerHTML={ {__html: p19} } />
        }
    }

    if (p20 !== undefined) {
        if(p20.trim().slice(0, 1) === '/') {
            test21 = <img src={p20} alt={title} />
        } else {
            test21 = <p dangerouslySetInnerHTML={ {__html: p20} } />
        }
    }

    if (p21 !== undefined) {
        if(p21.trim().slice(0, 1) === '/') {
            test22 = <img src={p21} alt={title} />
        } else {
            test22 = <p dangerouslySetInnerHTML={ {__html: p21} } />
        }
    }

    if (p22 !== undefined) {
        if(p22.trim().slice(0, 1) === '/') {
            test23 = <img src={p22} alt={title} />
        } else {
            test23 = <p dangerouslySetInnerHTML={ {__html: p22} } />
        }
    }

    if (p23 !== undefined) {
        if(p23.trim().slice(0, 1) === '/') {
            test24 = <img src={p23} alt={title} />
        } else {
            test24 = <p dangerouslySetInnerHTML={ {__html: p23} } />
        }
    }

    if (p24 !== undefined) {
        if(p24.trim().slice(0, 1) === '/') {
            test25 = <img src={p24} alt={title} />
        } else {
            test25 = <p dangerouslySetInnerHTML={ {__html: p24} } />
        }
    }

    if (p25 !== undefined) {
        if(p25.trim().slice(0, 1) === '/') {
            test26 = <img src={p25} alt={title} />
        } else {
            test26 = <p dangerouslySetInnerHTML={ {__html: p25} } />
        }
    }

    if (p26 !== undefined) {
        if(p26.trim().slice(0, 1) === '/') {
            test27 = <img src={p26} alt={title} />
        } else {
            test27 = <p dangerouslySetInnerHTML={ {__html: p26} } />
        }
    }

    if (p27 !== undefined) {
        if(p27.trim().slice(0, 1) === '/') {
            test28 = <img src={p27} alt={title} />
        } else {
            test28 = <p dangerouslySetInnerHTML={ {__html: p27} } />
        }
    }

    if (p28 !== undefined) {
        if(p28.trim().slice(0, 1) === '/') {
            test29 = <img src={p28} alt={title} />
        } else {
            test29 = <p dangerouslySetInnerHTML={ {__html: p28} } />
        }
    }

    if (p29 !== undefined) {
        if(p29.trim().slice(0, 1) === '/') {
            test30 = <img src={p29} alt={title} />
        } else {
            test30 = <p dangerouslySetInnerHTML={ {__html: p29} } />
        }
    }

    if (p30 !== undefined) {
        if(p30.trim().slice(0, 1) === '/') {
            test31 = <img src={p30} alt={title} />
        } else {
            test31 = <p dangerouslySetInnerHTML={ {__html: p30} } />
        }
    }

    if (p31 !== undefined) {
        if(p31.trim().slice(0, 1) === '/') {
            test32 = <img src={p31} alt={title} />
        } else {
            test32 = <p dangerouslySetInnerHTML={ {__html: p31} } />
        }
    }

    if (p32 !== undefined) {
        if(p32.trim().slice(0, 1) === '/') {
            test33 = <img src={p32} alt={title} />
        } else {
            test33 = <p dangerouslySetInnerHTML={ {__html: p32} } />
        }
    }

    if (p33 !== undefined) {
        if(p33.trim().slice(0, 1) === '/') {
            test34 = <img src={p33} alt={title} />
        } else {
            test34 = <p dangerouslySetInnerHTML={ {__html: p33} } />
        }
    }

    if (p34 !== undefined) {
        if(p34.trim().slice(0, 1) === '/') {
            test35 = <img src={p34} alt={title} />
        } else {
            test35 = <p dangerouslySetInnerHTML={ {__html: p34} } />
        }
    }

    if (p35 !== undefined) {
        if(p35.trim().slice(0, 1) === '/') {
            test36 = <img src={p35} alt={title} />
        } else {
            test36 = <p dangerouslySetInnerHTML={ {__html: p35} } />
        }
    }

    if (p36 !== undefined) {
        if(p36.trim().slice(0, 1) === '/') {
            test37 = <img src={p36} alt={title} />
        } else {
            test37 = <p dangerouslySetInnerHTML={ {__html: p36} } />
        }
    }

    if (p37 !== undefined) {
        if(p37.trim().slice(0, 1) === '/') {
            test38 = <img src={p37} alt={title} />
        } else {
            test38 = <p dangerouslySetInnerHTML={ {__html: p37} } />
        }
    }

    if (p38 !== undefined) {
        if(p38.trim().slice(0, 1) === '/') {
            test39 = <img src={p38} alt={title} />
        } else {
            test39 = <p dangerouslySetInnerHTML={ {__html: p38} } />
        }
    }

    if (p39 !== undefined) {
        if(p39.trim().slice(0, 1) === '/') {
            test40 = <img src={p39} alt={title} />
        } else {
            test40 = <p dangerouslySetInnerHTML={ {__html: p39} } />
        }
    }

    if (p40 !== undefined) {
        if(p40.trim().slice(0, 1) === '/') {
            test41 = <img src={p40} alt={title} />
        } else {
            test41 = <p dangerouslySetInnerHTML={ {__html: p40} } />
        }
    }

    if (p41 !== undefined) {
        if(p41.trim().slice(0, 1) === '/') {
            test42 = <img src={p41} alt={title} />
        } else {
            test42 = <p dangerouslySetInnerHTML={ {__html: p41} } />
        }
    }

    if (p42 !== undefined) {
        if(p42.trim().slice(0, 1) === '/') {
            test43 = <img src={p42} alt={title} />
        } else {
            test43 = <p dangerouslySetInnerHTML={ {__html: p42} } />
        }
    }

    if (p43 !== undefined) {
        if(p43.trim().slice(0, 1) === '/') {
            test44 = <img src={p43} alt={title} />
        } else {
            test44 = <p dangerouslySetInnerHTML={ {__html: p43} } />
        }
    }

    if (p44 !== undefined) {
        if(p44.trim().slice(0, 1) === '/') {
            test45 = <img src={p44} alt={title} />
        } else {
            test45 = <p dangerouslySetInnerHTML={ {__html: p44} } />
        }
    }

    if (p45 !== undefined) {
        if(p45.trim().slice(0, 1) === '/') {
            test46 = <img src={p45} alt={title} />
        } else {
            test46 = <p dangerouslySetInnerHTML={ {__html: p45} } />
        }
    }

    if (p46 !== undefined) {
        if(p46.trim().slice(0, 1) === '/') {
            test47 = <img src={p46} alt={title} />
        } else {
            test47 = <p dangerouslySetInnerHTML={ {__html: p46} } />
        }
    }

    if (p47 !== undefined) {
        if(p47.trim().slice(0, 1) === '/') {
            test48 = <img src={p47} alt={title} />
        } else {
            test48 = <p dangerouslySetInnerHTML={ {__html: p47} } />
        }
    }

    if (p48 !== undefined) {
        if(p48.trim().slice(0, 1) === '/') {
            test49 = <img src={p48} alt={title} />
        } else {
            test49 = <p dangerouslySetInnerHTML={ {__html: p48} } />
        }
    }

    if (p49 !== undefined) {
        if(p49.trim().slice(0, 1) === '/') {
            test50 = <img src={p49} alt={title} />
        } else {
            test50 = <p dangerouslySetInnerHTML={ {__html: p49} } />
        }
    }

    if (p50 !== undefined) {
        if(p50.trim().slice(0, 1) === '/') {
            test51 = <img src={p50} alt={title} />
        } else {
            test51 = <p dangerouslySetInnerHTML={ {__html: p50} } />
        }
    }

    if (p51 !== undefined) {
        if(p51.trim().slice(0, 1) === '/') {
            test52 = <img src={p51} alt={title} />
        } else {
            test52 = <p dangerouslySetInnerHTML={ {__html: p51} } />
        }
    }

    if (p52 !== undefined) {
        if(p52.trim().slice(0, 1) === '/') {
            test53 = <img src={p52} alt={title} />
        } else {
            test53 = <p dangerouslySetInnerHTML={ {__html: p52} } />
        }
    }

    if (p53 !== undefined) {
        if(p53.trim().slice(0, 1) === '/') {
            test54 = <img src={p53} alt={title} />
        } else {
            test54 = <p dangerouslySetInnerHTML={ {__html: p53} } />
        }
    }

    if (p54 !== undefined) {
        if(p54.trim().slice(0, 1) === '/') {
            test55 = <img src={p54} alt={title} />
        } else {
            test55 = <p dangerouslySetInnerHTML={ {__html: p54} } />
        }
    }

    if (p55 !== undefined) {
        if(p55.trim().slice(0, 1) === '/') {
            test56 = <img src={p55} alt={title} />
        } else {
            test56 = <p dangerouslySetInnerHTML={ {__html: p55} } />
        }
    }

    if (p56 !== undefined) {
        if(p56.trim().slice(0, 1) === '/') {
            test57 = <img src={p56} alt={title} />
        } else {
            test57 = <p dangerouslySetInnerHTML={ {__html: p56} } />
        }
    }

    if (p57 !== undefined) {
        if(p57.trim().slice(0, 1) === '/') {
            test58 = <img src={p57} alt={title} />
        } else {
            test58 = <p dangerouslySetInnerHTML={ {__html: p57} } />
        }
    }

    if (p58 !== undefined) {
        if(p58.trim().slice(0, 1) === '/') {
            test59 = <img src={p58} alt={title} />
        } else {
            test59 = <p dangerouslySetInnerHTML={ {__html: p58} } />
        }
    }

    if (p59 !== undefined) {
        if(p59.trim().slice(0, 1) === '/') {
            test60 = <img src={p59} alt={title} />
        } else {
            test60 = <p dangerouslySetInnerHTML={ {__html: p59} } />
        }
    }

    testTags = tags.map((t, index) => {
        return <p key={index}>{t}</p>
    })

    return (
        <React.Fragment>
            {test1}
            {test2}
            {test3}
            {test4}
            {test5}
            {test6}
            {test7}
            {test8}
            {test9}
            {test10}
            {test11}
            {test12}
            {test13}
            {test14}
            {test15}
            {test16}
            {test17}
            {test18}
            {test19}
            {test20}
            {test21}
            {test22}
            {test23}
            {test24}
            {test25}
            {test26}
            {test27}
            {test28}
            {test29}
            {test30}
            {test31}
            {test32}
            {test33}
            {test34}
            {test35}
            {test36}
            {test37}
            {test38}
            {test39}
            {test40}
            {test41}
            {test42}
            {test43}
            {test44}
            {test45}
            {test46}
            {test47}
            {test48}
            {test49}
            {test50}
            {test51}
            {test52}
            {test53}
            {test54}
            {test55}
            {test56}
            {test57}
            {test58}
            {test59}
            {test60}
            <div className={css.Tags}>
                {testTags}
            </div>
        </React.Fragment>
    )
}

export default Articles
