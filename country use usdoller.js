
 // Print the country that uses US dollars as currency

const inrAmounts = [100, 500, 1000, 2000];


const usdAmounts = inrAmounts.map(inr => inr * 0.01203);

console.log("Converted amounts (USD):");
usdAmounts.forEach((usd, index) => {
    console.log(`Amount ${index + 1}: $${usd.toFixed(2)}`);
});