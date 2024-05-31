
 // Get all the countries from Asia continent /region using Filter method


const asianCountries = [
    { name: "India", region: "Southern Asia" },
    { name: "China", region: "Eastern Asia" },
    { name: "Brunei", region: "South-Eastern Asia" }

];

const countriesInAsia = asianCountries.filter(country => country.region.includes("Asia"));

console.log("Countries in Asia:");
countriesInAsia.forEach(country => console.log(country.name));