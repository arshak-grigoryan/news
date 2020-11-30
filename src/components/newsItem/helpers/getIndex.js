import getUrlParts from './getUrlParts';

const getIndex = (path) => {
    const urlParts = getUrlParts(path)
    const index = urlParts.filter((part) => {
        if(isFinite(part)) {
            return part
        }
    })
    return Number(index)
}

export default getIndex