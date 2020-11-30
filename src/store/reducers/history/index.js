import historyState from './historyState';

import { ADD_URL } from '../../constants';

const hisotryReducer = (state = historyState, actions) => {
    const { type, payload } = actions;

    switch(type) {
        case ADD_URL:
        const { url } = payload
            return [
                ...state,
                url
            ]
        default:
            return state
    }
}

export default hisotryReducer