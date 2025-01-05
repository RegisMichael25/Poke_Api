async function getPokemon(endPoint) {
await fetch(`https://pokeapi.co/api/v2/pokemon/${endPoint}`)
.then((response) => response.json())
.then((responseBody) => {
    console.log(responseBody);
    
    renderPokemon(responseBody);
})
.catch((error) => console.error('Error:', error));
}

// async function getPokemon(endPoint) {
//     const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${endPoint}`);
//     const pokemonResponse = await pokemon.json();
//     console.log(pokemonResponse);
//     showPokemon(pokemonResponse);
// }


