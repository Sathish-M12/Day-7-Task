

// Get all the countries with a population of less than 2 lakhs using Filter method

const countries = [
    { name: "India", population: "1428627663" },
    { name: "China", population: "1425671352" },
    { name: "Japan", population: "137479" },

    ];


const smallPopulationCountries = countries.filter(country => country.population < 200000);

console.log("small Population Countries:");
smallPopulationCountries.forEach(country => console.log(country.name));