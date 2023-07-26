import { getFish } from './database.js'
import { FishList } from './fish.js';
import { tankTipList } from './tips.js';
import { scubaTipList } from './tips.js';
import { harvestLocationsList } from './locations.js';

const allFish = getFish()

const martinsFishHTMLElement = document.querySelector(".martins-fish")
martinsFishHTMLElement.innerHTML = FishList()

const tankTipsHTMLElement = document.querySelector(".tank-tips")
tankTipsHTMLElement.innerHTML = tankTipList()

const scubaTipsHTMLElement = document.querySelector(".scuba-tips")
scubaTipsHTMLElement.innerHTML = scubaTipList()

const harvestLocationsHTMLElement = document.querySelector(".harvest-trips")
harvestLocationsHTMLElement.innerHTML = harvestLocationsList()