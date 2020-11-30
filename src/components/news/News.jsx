import React, { useEffect, useState } from 'react';

import urls from '../../urls';

import useFetch from '../../hooks/useFetch';

import NewsItemIntro from "../newsItemIntro/NewsItemIntro";

import './news.css';

const News = ({section}) => {
    const [data, setData] = useState([]);
    const { results } = useFetch(urls[section]);

    useEffect(() => {
        if(results) {
            const first5 = results.filter((_, i) => i < 5)
            setData(first5)
        }
    }, [results]);

    const news = data.map(({title, multimedia, abstract}, i) => {
        return (
            <NewsItemIntro
                key={i}
                id={i}
                title={title}
                imgUrl={multimedia ? multimedia[0].url : null}
                text={abstract}
                section={section}
            />
        );
    });

    console.log('News')

    return (
        <div className='newsWrapper'>
            <div className='news'>
                {news}
            </div>            
        </div>
    )
}

export default News