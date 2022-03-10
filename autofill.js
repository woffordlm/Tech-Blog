

const cocktails = ["Negroni", 'Whiskey Sour'];
fillCocktail = (e) => {
    // let cocktailsArray = []
    if (e.target.value) {
        cocktailsArray  = cocktails.filter(drink => drink.toLowerCase().includes(e.target.value) )
        cocktailsArray = cocktailsArray.map (drink => `<li>${drink}<li>`)
    }
    console.log(cocktailsArray)
}

function showCocktails(cocktailsArray) {
    const html = !cocktailsArray.length ? '' : cocktailsArray.join("");
    document.querySelector('ul').innerHTML = html;
}
document.getElementById('search').addEventListener('input', fillCocktail )
