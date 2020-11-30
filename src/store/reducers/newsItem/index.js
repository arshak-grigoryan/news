import newsItemState from './newsItemState';

import { NEW_NEWS_ITEM } from '../../constants';

const newsItemReducer = (state = newsItemState, actions) => {
    const { type, payload } = actions;

    switch(type) {
        case NEW_NEWS_ITEM:
        const { title, imgUrl, text } = payload
            return {
                newsItem: { title, imgUrl, text }
            }
        default:
            return state
    }
}

export default newsItemReducer