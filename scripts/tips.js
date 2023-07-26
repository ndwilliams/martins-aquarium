import { getTankTips } from './database.js'
import { getScubaTips} from './database.js'

export const tankTipList = () => {
    const tankTips = getTankTips()
    let htmlString = '<ol>'
    for (const tips of tankTips) {
        htmlString += `
                <li>${tips.tip}</li>
        `
    }
    htmlString += `</ol>`
    return htmlString
}

export const scubaTipList = () => {
    const scubaTips = getScubaTips()
    let htmlString = '<ol>'
    for (const tips of scubaTips) {
        htmlString += `
                <li>${tips.tip}</li>
        `
    }
    htmlString += `</ol>`
    return htmlString
}