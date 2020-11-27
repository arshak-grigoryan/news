const API_KEY = 'nqh6WhosAPRLrh8VmMaG1B3lQxB63UvG';

const getUrl = (section) => `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`

export const SECTIONS = ['home', 'arts', 'books']

const addUrl = (sections, urls = {}) => {
    sections.forEach(section => {
        urls[section] = getUrl(section)
    });
    return urls
}

const urls = addUrl(SECTIONS)

export default urls