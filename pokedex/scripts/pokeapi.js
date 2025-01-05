const offset = 0;
let limit = 3;

fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
.then((response) => response.json())
.then((pokemons) => pokemons.results)
.then((pokemonsBody) => {
    let listPokemons = [pokemonsBody]
    const pokemonsCapth = listPokemons.map((pokemon) => {
        `
            
        `
    })
})
