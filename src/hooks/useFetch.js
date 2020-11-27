import { useState } from 'react';

import useMount from './useMount';

const cache = new Map()

const useFetch = (url) => {
    const [data, setData] = useState([])

    useMount(() => {
        if (cache.has(url)) {
            console.log('cached fetch')
            const data = cache.get(url)
            setData(data)
            return
        }        
        (async () => {
            try {
                console.log('new fetch')
                const res = await fetch(url)
                const data = await res.json()
                cache.set(url, data)
                setData(data)
                return
            } catch(err) {
                console.error(err)
            }
        })();
    });

    return data
}

export default useFetch