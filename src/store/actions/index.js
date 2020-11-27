import { NEW_NEWS_ITEM } from '../constants';

export const newNewsItem = ({id, title, imgUrl, text}) => {
    return {
        type: NEW_NEWS_ITEM,
        payload: {id, title, imgUrl, text}
    }
}