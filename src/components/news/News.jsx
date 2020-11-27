import React, { useEffect, useState } from 'react';

import urls from '../../urls';

import useFetch from '../../hooks/useFetch';

import Loading from '../loading/Loading';

import NewsItemIntro from "../newsItemIntro/NewsItemIntro";

import './news.css';

const News = ({section}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const { results } = useFetch(urls[section]);

    useEffect(() => {
        if(results) {
            const first5 = results.filter((_, i) => i < 5)
            setData(first5)
            setIsLoading(false)
        }
    }, [results]);

    const news = data.map(({title, multimedia, abstract}, i) => {
        return (
            <NewsItemIntro
                key={i}
                id={i+1}
                title={title}
                imgUrl={multimedia ? multimedia[0].url : null}
                text={abstract}
                section={section}
            />
        );
    });

    console.log('News')

    return (
        isLoading
        ?
        <Loading />
        :
        <div className='newsWrapper'>
            <div className='news'>
                {news}
            </div>
        </div>
    )
}

export default News