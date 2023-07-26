import { getHarvestLocations } from './database.js'

export const harvestLocationsList = () => {
    const harvestLocations = getHarvestLocations()
    let htmlString = '<article class="harvestList">'
    for (const location of harvestLocations) {
        htmlString += `<section class="harvest-locations">
            <div><img class="harvest_img" src="${location.image}"/></div>
            <div class="harvest-location-name">${location.location}</div>
            </section>
        `
    }
    htmlString += `</article>`
    return htmlString
}
