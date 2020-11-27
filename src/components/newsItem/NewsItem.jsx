import React from 'react';

import { useSelector } from "react-redux";

import { getNewsItem } from '../../store/selectors';

import './newsItem.scss';

const NewsItem = () => {
    const { newsItem } = useSelector((state) => ( { newsItem : getNewsItem(state) } ));

    const { title, imgUrl, text } = newsItem;

    console.log('NewsItem');

    return (
        <div className='newsItem'>
            {imgUrl && <img src={imgUrl} alt='img'/>}
            <div className='info'>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default NewsItem