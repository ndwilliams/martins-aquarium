// Import the function that returns a copy of the fish array
import { getFish } from "./database.js";

const allFish = getFish()

export const mostHolyFish = () => {
    const holyFish =[]
    for (const fish of allFish) {
        if (fish.length % 3 === 0)
        holyFish.push(fish)
    }
    return holyFish;
}

export const soldierFish = () => {
    const soldiers = []
    for (const fish of allFish) {
        if (fish.length % 5 === 0)
        soldiers.push(fish)
    }
    return soldiers;
}

export const nonHolyFish = () => {
    const nonHolyFish = []
    for (const fish of allFish) {
    if (fish.length % 3 != 0 && fish.length % 5 != 0)
    nonHolyFish.push(fish)
}
return nonHolyFish
}

export const FishList = () => {
    let htmlString = '<article class="fishList">'
    for (const fish of allFish) {
        htmlString += `<section class="fish_card">
            <div><img class="fish_img" src="${fish.image}"/></div>
            <div class="fish_name">Name : ${fish.name}</div>
            <div class="fish_species">${fish.species}</div>
            <div class="fish_length">${fish.length} cm</div>
            <div class="fish_location">Harvest Location : ${fish.location}</div>
            <div class="fish_diet">Diet : ${fish.food}</div>
            </section>
        `
    }
    htmlString += `</article>`
    return htmlString
}



