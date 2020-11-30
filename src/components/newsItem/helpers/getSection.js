import { SECTIONS } from '../../../urls'

import getUrlParts from './getUrlParts';

const getSection = (path) => {
    const urlParts = getUrlParts(path)
    const section = urlParts.filter((part) => SECTIONS.includes(part))[0]
    return section
}

export default getSection