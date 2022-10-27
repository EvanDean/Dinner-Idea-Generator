
const btn = document.getElementsByClassName('btn');
const output = document.getElementById('output');

const proteins = ['chicken', 'beef', 'pork', 'fish', 'tofu', 'soya protein', 'prawns', 'crab', 'lamb', 'duck', 'clams'];
const veggies = ['carrots', 'peas', 'broccoli', 'cabbage', 'artichoke', 'asparagus', 'brussels sprouts', 'cauliflower', 'green beans', 'kale', 'mushrooms', 'parsnips', 'pumpkin', 'butternut squash', 'gem squash', 'zuchini'];
const carbs = ['rice', 'potatoes', 'pasta', 'pap', 'barley', 'couscous', 'spaghetti', 'penne', 'ramen', 'brown rice', 'vermicelli noodles', 'sweet potatoes', 'roast potatoes', 'mash potatoes', 'french fries', 'chips', 'fried rice'];
const cooking = ['roasted', 'fried', 'stewed', 'boiled', 'stir-fried', 'grilled', 'barbecued', 'baked', 'deep fried', 'sauteed'];

let getIdea = () => {
    let randomProtein = proteins[Math.floor(Math.random() * proteins.length)];
    let randomVeggie1 = veggies[Math.floor(Math.random() * veggies.length)];
    let randomVeggie2 = veggies[Math.floor(Math.random() * veggies.length)];
    let randomCarb = carbs[Math.floor(Math.random() * carbs.length)];
    let randomCooking1 = cooking[Math.floor(Math.random() * cooking.length)];
    let randomCooking2 = cooking[Math.floor(Math.random() * cooking.length)];
    let randomCooking3 = cooking[Math.floor(Math.random() * cooking.length)];
    
    output.innerHTML = `How about ${randomCooking1} ${randomProtein} with ${randomCooking2} ${randomVeggie1}, ${randomCooking3} ${randomVeggie2} and ${randomCarb}?`; 
}

btn.onclick = function(){getIdea()};
