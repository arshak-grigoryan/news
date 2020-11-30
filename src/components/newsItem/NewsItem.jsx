import React,{ useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import urls from '../../urls';
import useFetch from '../../hooks/useFetch';
import getSection from './helpers/getSection';
import getIndex from './helpers/getIndex';

import './newsItem.scss';

const NewsItem = () => {
    // const params = useParams()
    // const { newsItem } = useSelector((state) => ( { newsItem : getNewsItem(state) } ))
    
    // const { title, imgUrl, text } = newsItem
        
    const location = useLocation();
    const section = getSection(location.pathname)
    const index = getIndex(location.pathname)

    const [newsItem, setNewsItem] = useState({});

    const { title, multimedia, abstract: text } = newsItem // what if multimedia is undefined from fetch ? 
    const imgUrl = multimedia ? multimedia[0].url : null
    
    const { results } = useFetch(urls[section]);

    useEffect(() => {
        if(results) {
            const item = results[index]
            setNewsItem(item)
        }
    }, [results, index]);

    console.log('NewsItem')

    return (
        <div className='newsItem'>
            { imgUrl && <img src={imgUrl} alt='img'/> }
            <div className='info'>
                <h2>{title}</h2>
                <p>{text}</p>                
            </div>
        </div>        
    )
}

export default NewsItem