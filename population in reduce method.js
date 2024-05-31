

// Print the total population of countries using reduce method

const countries1 = [
    { name: "India", population: "742866899" },
    { name: "China", population: "4256713592" },

    { name: "Brunei", population: "7037479" },
    
];


const totalPopulation = countries1.reduce((acc, country) => acc + country.population, 0);

console.log(`Total population of all countries: ${totalPopulation.toLocaleString()}`);