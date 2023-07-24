const database = {
    fish: [
            {
              species: "Guppy",
              petName: "Finny",
              length: 4.5,
              diet: "Flakes",
              harvestLocation: "China"
            },
            {
              species: "Neon Tetra",
              petName: "Glow",
              length: 3.2,
              diet: "Small Insects",
              harvestLocation: "Thailand"
            },
            {
              species: "Betta Fish",
              petName: "Blue",
              length: 6.0,
              diet: "Bloodworms",
              harvestLocation: "Panama"
            },
            {
              species: "Angelfish",
              petName: "Wings",
              length: 8.7,
              diet: "Worms",
              harvestLocation: "Brazil"
            },
            {
              species: "Clownfish",
              petName: "Sunny",
              length: 5.5,
              diet: "Algae",
              harvestLocation: "Indonesia"
            },
            {
              species: "Corydoras Catfish",
              petName: "Stripes",
              length: 6.8,
              diet: "Insects",
              harvestLocation: "Chile"
            }
          ]
}

export const getFish = () => {
  return database.fish.map(fish => ({...fish}))
}