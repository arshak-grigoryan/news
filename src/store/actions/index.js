import { NEW_NEWS_ITEM, ADD_URL } from '../constants';

export const newNewsItem = ({id, title, imgUrl, text}) => {
    return {
        type: NEW_NEWS_ITEM,
        payload: {id, title, imgUrl, text}
    }
}

export const newUrl = (url) => {
    return {
        type: ADD_URL,
        payload: { url }
    }
}