const database = {
    fish: [
            { 
              image: "https://splashyfishstore.com/cdn/shop/articles/beautiful-guppy-isolated-on-black-background-2021-09-03-19-05-20-utc.jpg?v=1634755837",
              species: "Guppy",
              name: "Finny",
              length: 16,
              food: "Flakes",
              location: "China"
            },
            { 
              image: "https://shrimpybusiness.com/cdn/shop/products/NeonTetra1.jpg?v=1644547585&width=1445", 
              species: "Neon Tetra",
              name: "Glow",
              length: 9,
              food: "Small Insects",
              location: "Thailand"
            },
            { image: "https://home.adelphi.edu/~ve21375/betta%20fish%20home%201.jpg",
              species: "Betta Fish",
              name: "Blue",
              length: 6,
              food: "Bloodworms",
              location: "Panama"
            },
            {
              image : "https://cdn.the-scientist.com/assets/articleNo/70691/aImg/48362/freshwater-angelfish-800-l.jpg",
              species: "Angel fish",
              name: "Wings",
              length: 8,
              food: "Worms",
              location: "Brazil"
            },
            {
              image: "https://cdn.britannica.com/80/160480-004-10A06884/clown-fish-appearance-anemone.jpg",
              species: "Clown fish",
              name: "Sunny",
              length: 5,
              food: "Algae",
              location: "Indonesia"
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0311/3149/files/shutterstock_669918610_-_Leopard_Cory_Fish.jpg?v=1567185106",
              species: "Corydoras Catfish",
              name: "Stripes",
              length: 10,
              food: "Insects",
              location: "Chile"
            }
          ],
tankTips: [
            {
              id: 1,
              tip: "Regular water changes: Perform regular water changes, typically 10-20% of the tank volume every 1-2 weeks. This helps remove accumulated waste, excess nutrients, and maintains water quality for your fish."
            },
            {
              id: 2,
              tip: "Maintain proper salinity levels: Ensure your fish tank's salinity matches the requirements of your fish species. Some fish are freshwater, while others are brackish or saltwater species. Use a reliable hydrometer or refractometer to monitor salinity and make adjustments when needed."   
            },
            {
              id: 3,
              tip: "Control water temperature: Keep the water temperature within the optimal range for your fish. Sudden temperature fluctuations can stress the fish and compromise their health. Invest in a reliable aquarium heater and thermometer to regulate the temperature effectively." 
            },
            {
              id: 4,
              tip: "Monitor water parameters: Regularly test the water for ammonia, nitrite, nitrate, and pH levels using appropriate test kits. Understanding the water parameters allows you to detect potential issues early and take corrective measures to keep your fish healthy and the tank clean."
            }
          ],
scubaTips:[
            {
              id: 1,
              tip: "Know local regulations: Before attempting any fish harvesting during scuba diving, familiarize yourself with the specific rules and regulations of the area you're diving in. Many places have strict guidelines on what, when, and how much fish you can harvest. Respect these guidelines to preserve the marine ecosystem and avoid legal issues."
            },
            {
              id: 1,
              tip: "Use sustainable harvesting methods: If fish harvesting is permitted, employ sustainable methods such as spearfishing or hand nets. Avoid damaging the coral reefs, seafloor, or any other marine life during the process. Responsible harvesting ensures the longevity of the fish population and maintains the ecological balance."
            },
            {
              id: 1,
              tip: "Identify non-target species: While diving for fish, it's essential to be able to identify different species accurately. Distinguish between protected, endangered, or non-edible species to prevent accidental harvesting of vulnerable marine life. Proper identification skills also contribute to informed decision-making and responsible fishing practices."
            }
           ],
harvestLocations:[
            {
              location: "Qiandao Lake, China",
              image:"https://ak-d.tripcdn.com/images/10071f000001h6ymy0856_C_640_320_R5_Q70.jpg_.webp?proc=source%2Ftrip"
            },
            {
              location: "Ko Tao, Thailand",
              image: "https://touringhighlights.com/wp-content/uploads/2021/09/Koh-Nang-Yuan-Koh-Tao-South-Thailand-Tour.jpg"
            },
            {
              location: "Bocas del Toro, Panama",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfULZemWEXuvl65Z3D6QjJ_4uZe9-_Lf3bA&usqp=CAU"
            },
            {
              location: "Fernando de Noronha, Brazil",
              image: "https://www.visitbrasil.com/wp-content/uploads/2022/10/noronhaPraia3.jpg"
            },
            {
              location: "Raja Ampat, Indonesia",
              image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/1e/e1/22/getlstd-property-photo.jpg?w=600&h=400&s=1"
            },
            {
              location:"Easter Island, Chile",
              image: "https://people.com/thmb/suol7FRq6e4nK_Jhnk99d57Ujf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(919x626:921x628)/easter-island-ac4d21dfdb864d8a8481fc0885b02605.jpg"
            }
    ]
    
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}

export const getTankTips = () => {
  return database.tankTips.map(fish => ({...fish}))
}

export const getScubaTips = () => {
  return database.scubaTips.map(fish => ({...fish}))
}

export const getHarvestLocations = () => {
  return database.harvestLocations.map(fish => ({...fish}))
}