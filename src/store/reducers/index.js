import defaultState from './defaultState';

import { NEW_NEWS_ITEM } from '../constants';

const newsReducer = (state = defaultState, actions) => {
    const { type, payload } = actions;

    if (!payload) return state;

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

export default newsReducer