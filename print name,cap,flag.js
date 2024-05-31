

// Print the following details name, capital, flag, using forEach method

const Countries = [
    { name: "India", capital: "New Delhi", flag: "https://flagpedia.net/data/flags/normal/in.png" },
    { name: "China", capital: "Beijing", flag: "https://flagpedia.net/data/flags/normal/cn.png" },
    { name: "Brunei", capital: "Bandar Seri Begawan", flag: "https://flagpedia.net/data/flags/normal/bn.png" }
    
];

countries.forEach(country => {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Flag URL: ${country.flag}`);
    console.log("");
});